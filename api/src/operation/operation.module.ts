import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Department} from "../department/entities/department.entity";
import {Employee} from "../employee/entities/employee.entity";
import {Profession} from "../profession/entities/profession.entity";
import {Operation} from "./entities/operation.entity";

@Module({
  imports: [SequelizeModule.forFeature([Operation])],
  controllers: [OperationController],
  providers: [OperationService],
})
export class OperationModule {}
