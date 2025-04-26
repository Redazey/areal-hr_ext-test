import { Controller, Get } from '@nestjs/common';
import { ChangeService } from './change.service';

@Controller('change')
export class ChangeController {
  constructor(private readonly changeService: ChangeService) {}

  @Get()
  findAll() {
    return this.changeService.findAll();
  }
}
