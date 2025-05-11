import { Injectable } from '@nestjs/common';
import { CreationAttributes, Op } from 'sequelize';
import { Operation } from './entities/operation.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from '../department/entities/department.entity';
import { Employee } from '../employee/entities/employee.entity';
import { Profession } from '../profession/entities/profession.entity';

@Injectable()
export class OperationService {
  constructor(
    @InjectModel(Operation) private operationModule: typeof Operation,
  ) {}
  create(createOperationDto: CreationAttributes<Operation>) {
    return this.operationModule.create(createOperationDto);
  }

  findAll() {
    return this.operationModule.findAll({
      attributes: ['id', 'salary'],
      include: [
        {
          model: Department,
          attributes: ['name'],
        },
        {
          model: Profession,
          attributes: ['name'],
        },
        {
          model: Employee,
          attributes: ['last_name', 'first_name'],
        },
      ],
      where: {
        [Op.or]: [{ deleted_at: null }],
      },
    });
  }

  remove(id: number) {
    return this.operationModule.update(
      { deleted_at: new Date() },
      {
        where: { id: id },
      },
    );
  }
}
