import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, UseGuards,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreationAttributes } from 'sequelize';
import { Employee } from './entities/employee.entity';
import { JoiValidationPipe } from '../../pipes/joi-validation/joi-validation.pipe';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { AdminRoleGuard } from '../auth/admin-role.guard';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @UseGuards(AdminRoleGuard)
  create(
    @Body(new JoiValidationPipe(CreateEmployeeDto))
    createEmployeeDto: CreationAttributes<Employee>,
  ) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Patch(':id')
  @UseGuards(AdminRoleGuard)
  update(
    @Param('id') id: string,
    @Body(new JoiValidationPipe(UpdateEmployeeDto))
    updateEmployeeDto: CreationAttributes<Employee>,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  @UseGuards(AdminRoleGuard)
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
