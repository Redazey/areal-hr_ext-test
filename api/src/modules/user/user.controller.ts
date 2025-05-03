import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JoiValidationPipe } from '../../pipes/joi-validation/joi-validation.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { CreationAttributes } from 'sequelize';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { AdminRoleGuard } from '../auth/admin-role.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(AdminRoleGuard)
  create(
    @Body(new JoiValidationPipe(CreateUserDto))
    createUserDto: CreationAttributes<User>,
  ) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(AdminRoleGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  @UseGuards(AdminRoleGuard)
  update(
    @Param('id') id: string,
    @Body(new JoiValidationPipe(UpdateUserDto))
    updateUserDto: CreationAttributes<User>,
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AdminRoleGuard)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
