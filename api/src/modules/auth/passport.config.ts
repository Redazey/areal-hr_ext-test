import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as passport from 'passport';

@Injectable()
export class PassportConfig {
  constructor(private readonly userService: UserService) {
    passport.serializeUser((user: any, done) => {
      console.log('Serializing user:', user);
      done(null, user.email);
    });

    passport.deserializeUser(async (email: string, done) => {
      try {
        const user = await this.userService.findOne(email);
        console.log('Deserializing user:', user);
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    });
  }
}
