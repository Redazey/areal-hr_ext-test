import { Injectable } from '@nestjs/common';
import { Profession } from './entities/profession.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreationAttributes, Op } from 'sequelize';

@Injectable()
export class ProfessionService {
  constructor(
    @InjectModel(Profession) private professionModule: typeof Profession,
  ) {}

  create(createProfessionDto: CreationAttributes<Profession>) {
    return this.professionModule.create(createProfessionDto);
  }

  findAll() {
    return this.professionModule.findAll({
      where: {
        [Op.or]: [{ deleted_at: null }],
      },
    });
  }

  update(id: number, updateProfessionDto: CreationAttributes<Profession>) {
    return this.professionModule.update(updateProfessionDto, {
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.professionModule.update(
      { isDeleted: true },
      {
        where: {
          id: id,
        },
      },
    );
  }
}
