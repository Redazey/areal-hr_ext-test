import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Public } from '../../common/decorators/public.decorator';
import { LocalLoginGuard } from './local-login.guard';
import { UserService } from '../user/user.service';
import { JoiValidationPipe } from '../../pipes/joi-validation/joi-validation.pipe';
import { RegistrationDto } from './dto/registration.dto';
import { CreationAttributes } from 'sequelize';
import { User } from '../user/entities/user.entity';
import { RolesService } from '../roles/roles.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly rolesService: RolesService,
  ) {}

  @Public()
  @UseGuards(LocalLoginGuard)
  @Post('login')
  async login(@Request() req) {
    return new Promise((resolve, reject) => {
      req.login(req.user, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(req.user);
        }
      });
    });
  }

  @Public()
  @Post('registration')
  async registration(
    @Body(new JoiValidationPipe(RegistrationDto))
    registrationDto: CreationAttributes<User>,
  ) {
    const role = await this.rolesService.findOneByName('manager');
    registrationDto.role_id = role.id;
    return await this.userService.create(registrationDto);
  }

  @Get('me')
  async me(@Request() req) {
    return req.user;
  }
}
