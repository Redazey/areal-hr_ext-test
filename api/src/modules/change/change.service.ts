import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Change } from './entities/change.entity';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class ChangeService {
  constructor(@InjectModel(Change) private changeModule: typeof Change) {}

  async findAll() {
    return await this.changeModule.findAll();
  }

  async create(change: CreationAttributes<Change>) {
    return await this.changeModule.create(change);
  }
}
