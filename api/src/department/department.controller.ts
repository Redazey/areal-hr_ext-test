import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import {JoiValidationPipe} from "../joi-validation/joi-validation.pipe";
import {Department} from "./entities/department.entity";
import {CreationAttributes} from "sequelize";

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  create(@Body(new JoiValidationPipe(CreateDepartmentDto))
         createDepartmentDto: CreationAttributes<Department>) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string,
         @Body(new JoiValidationPipe(UpdateDepartmentDto))
         updateDepartmentDto: CreationAttributes<Department>) {
    return this.departmentService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentService.remove(+id);
  }
}
