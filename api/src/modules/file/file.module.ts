import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { File } from './entities/file.entity';

@Module({
  imports: [SequelizeModule.forFeature([File])],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
