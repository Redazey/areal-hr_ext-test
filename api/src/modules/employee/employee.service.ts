import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './entities/employee.entity';
import { File } from '../file/entities/file.entity';
import { CreationAttributes, Op } from 'sequelize';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(Employee) private employeeModule: typeof Employee) {}

  create(createEmployeeDto: CreationAttributes<Employee>) {
    return this.employeeModule.create(createEmployeeDto);
  }

  findAll() {
    return this.employeeModule.findAll({
      include: [
        {
          model: File,
        },
      ],
      where: {
        [Op.or]: [{ deleted_at: null }],
      },
    });
  }

  update(id: number, updateEmployeeDto: CreationAttributes<Employee>) {
    return this.employeeModule.update(updateEmployeeDto, {
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.employeeModule.update(
      { deleted_at: new Date() },
      {
        where: { id: id },
      },
    );
  }
}
