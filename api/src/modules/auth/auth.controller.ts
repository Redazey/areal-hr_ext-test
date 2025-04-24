import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from '../../common/decorators/public.decorator';
import { LocalLoginGuard } from './local-login.guard';

@Controller('auth')
export class AuthController {
  @Public()
  @UseGuards(LocalLoginGuard)
  @Post('login')
  async login(@Request() req) {
    return new Promise((resolve, reject) => {
      req.login(req.user, (err) => {
        if (err) {
          console.error('[AuthController] req.login error:', err);
          reject(err);
        } else {
          console.log('[AuthController] login success');
          resolve(req.user);
        }
      });
    });
  }

  @Get('me')
  async me(@Request() req) {
    return req.user;
  }
}
