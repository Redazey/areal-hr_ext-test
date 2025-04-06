import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {File} from "./entities/file.entity";
import {Op} from "sequelize";

@Injectable()
export class FileService {
  constructor(
      @InjectModel(File) private fileModule: typeof File,
  ) {
  }

  create(file: Express.Multer.File) {
    return this.fileModule.create({name: file.filename, path: file.path});
  }

  findAll() {
    return this.fileModule.findAll({
      where: {
        [Op.or]: [{isDeleted: false}, {isDeleted: null}],
      }
    });
  }

  findOne(id: number) {
    return this.fileModule.findOne({
      where: {
        [Op.or]: [{isDeleted: false}, {isDeleted: null}, {id: id}],
      }
    })
  }

  remove(id: number) {
    return this.fileModule.update({isDeleted: true}, {
      where: {
        id: id
      }
    })
  }
}
