import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Employee} from "./entities/employee.entity";
import {File} from "../file/entities/file.entity";

@Module({
  imports: [
    SequelizeModule.forFeature([Employee]),
    SequelizeModule.forFeature([File])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
