import { Injectable } from '@nestjs/common';
import { Department } from './entities/department.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreationAttributes, Op } from 'sequelize';
import { Organization } from '../organization/entities/organization.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department) private departmentModule: typeof Department,
  ) {}

  create(createDepartmentDto: CreationAttributes<Department>) {
    console.log(createDepartmentDto);
    return this.departmentModule.create(createDepartmentDto);
  }

  async findAll() {
    const departments = await this.departmentModule.findAll({
      include: [Organization, Department],
      where: {
        [Op.or]: [{ deleted_at: null }],
      },
    });

    // Преобразуем результат, чтобы вернуть данные в нужном формате
    return departments.map((department) => {
      const org = department.organization
        ? department.organization.name
        : 'отсутствует';
      const parentDepartment = department.parent_department
        ? department.parent_department.name
        : 'отсутствует';

      return {
        id: department.id,
        name: department.name,
        comment: department.comment,
        organization_name: org,
        parent_department_name: parentDepartment,
      };
    });
  }

  update(id: number, updateDepartmentDto: CreationAttributes<Department>) {
    return this.departmentModule.update(updateDepartmentDto, {
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.departmentModule.update(
      { deleted_at: new Date() },
      {
        where: {
          id: id,
        },
      },
    );
  }
}
