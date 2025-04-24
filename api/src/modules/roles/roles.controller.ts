import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('role')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @Get()
  findAll() {
    return this.roleService.findAll();
  }
}
