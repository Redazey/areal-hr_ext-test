import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
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
  async login(@Req() req): Promise<Response> {
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
    const role = await this.rolesService.findOneByName('user');
    registrationDto.role_id = role.id;
    return await this.userService.create(registrationDto);
  }

  @Get('me')
  async me(@Req() req) {
    return req.user;
  }

  @Public()
  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.logout(() => {});
    res.clearCookie('connect.sid');
    return res.status(200).send({});
  }
}
