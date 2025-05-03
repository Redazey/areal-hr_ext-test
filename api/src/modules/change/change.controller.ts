import { Controller, Get, UseGuards } from '@nestjs/common';
import { ChangeService } from './change.service';
import { AdminRoleGuard } from '../auth/admin-role.guard';

@Controller('change')
export class ChangeController {
  constructor(private readonly changeService: ChangeService) {}

  @Get()
  @UseGuards(AdminRoleGuard)
  findAll() {
    return this.changeService.findAll();
  }
}
