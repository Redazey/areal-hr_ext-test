import { Injectable } from '@nestjs/common';
import { Role } from './entities/role.entity';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModule: typeof Role) {}

  findAll() {
    return this.roleModule.findAll({
      where: {
        [Op.or]: [{ deleted_at: null }],
      },
    });
  }
}
