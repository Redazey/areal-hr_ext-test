import { Injectable } from '@nestjs/common';
import { Role } from './entities/role.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModule: typeof Role) {}

  findAll() {
    return this.roleModule.findAll();
  }

  findOneByName(name: string) {
    return this.roleModule.findOne({
      where: {
        name: name,
      },
    });
  }
}
