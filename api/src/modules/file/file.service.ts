import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { File } from './entities/file.entity';
import { Op } from 'sequelize';

@Injectable()
export class FileService {
  constructor(@InjectModel(File) private fileModule: typeof File) {}

  create(file: Express.Multer.File) {
    return this.fileModule.create({ name: file.filename, path: file.path });
  }

  findAll() {
    return this.fileModule.findAll({
      where: {
        [Op.or]: [{ deleted_at: null }],
      },
    });
  }

  findOne(id: number) {
    return this.fileModule.findOne({
      where: {
        [Op.or]: [{ deleted_at: null }, { id: id }],
      },
    });
  }

  remove(id: number) {
    return this.fileModule.update(
      { deleted_at: new Date() },
      {
        where: {
          id: id,
        },
      },
    );
  }
}
