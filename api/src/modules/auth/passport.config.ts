import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as passport from 'passport';

@Injectable()
export class PassportConfig {
  constructor(private readonly userService: UserService) {}

  setup() {
    passport.serializeUser((user: any, done) => {
      done(null, user.email);
    });

    passport.deserializeUser(async (email: string, done) => {
      try {
        console.log('[Deserialize]', email);
        const user = await this.userService.findOne(email);
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    });
  }
}
