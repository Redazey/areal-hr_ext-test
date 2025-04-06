import { Module } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { ProfessionController } from './profession.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Profession} from "./entities/profession.entity";

@Module({
  imports: [SequelizeModule.forFeature([Profession])],
  controllers: [ProfessionController],
  providers: [ProfessionService],
})
export class ProfessionModule {}
