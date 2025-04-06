import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import {Organization} from "./entities/organization.entity";
import {JoiValidationPipe} from "../joi-validation/joi-validation.pipe";
import {CreationAttributes} from "sequelize";

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  create(@Body(new JoiValidationPipe(CreateOrganizationDto))
         createOrganizationDto: CreationAttributes<Organization>) {
    return this.organizationService.create(createOrganizationDto);
  }

  @Get()
  findAll() {
    return this.organizationService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string,
         @Body(new JoiValidationPipe(UpdateOrganizationDto))
         updateOrganizationDto: CreationAttributes<Organization>) {
    return this.organizationService.update(+id, updateOrganizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationService.remove(+id);
  }
}
