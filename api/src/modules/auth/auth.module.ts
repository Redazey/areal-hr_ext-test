import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { LocalAuthGuard } from './local-auth.guard';
import { LocalStrategy } from './local.strategy';
import { PassportConfig } from './passport.config';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: LocalAuthGuard,
    },
    LocalStrategy,
    PassportConfig,
  ],
})
export class AuthModule {}
