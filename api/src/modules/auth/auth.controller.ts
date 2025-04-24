import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from '../../common/decorators/public.decorator';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
  @Get('me')
  async me(@Request() req) {
    return req.user;
  }
}
