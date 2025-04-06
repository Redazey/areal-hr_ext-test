import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
  InternalServerErrorException
} from '@nestjs/common';
import {Response} from 'express';
import { FileService } from './file.service';
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from 'multer';
import * as path from 'path';
import {v4 as uuidv4} from 'uuid';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const filename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, filename);
      }
    }),
  }))
  create(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.create(file);
  }

  @Get()
  findAll() {
    return this.fileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const file = await this.fileService.findOne(+id);
      const rootDir = path.join(__dirname, '../../');
      return res.sendFile(file.path, {root: rootDir});
    }
    catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.remove(+id);
  }
}
