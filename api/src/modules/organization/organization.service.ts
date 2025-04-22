import { Injectable } from '@nestjs/common';
import { Organization } from './entities/organization.entity';
import { CreationAttributes, Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(Organization) private organizationModule: typeof Organization,
  ) {}

  create(createOrganizationDto: CreationAttributes<Organization>) {
    return this.organizationModule.create(createOrganizationDto);
  }

  findAll() {
    return this.organizationModule.findAll({
      where: {
        [Op.or]: [{ deleted_at: null }],
      },
    });
  }

  update(id: number, updateOrganizationDto: CreationAttributes<Organization>) {
    return this.organizationModule.update(updateOrganizationDto, {
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.organizationModule.update(
      { isDeleted: true },
      {
        where: {
          id: id,
        },
      },
    );
  }
}
