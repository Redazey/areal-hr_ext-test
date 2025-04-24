import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    // (await argon2.verify(user.password, password)
    if (user && password == user.password) {
      const { password, ...result } = user.dataValues;
      return result;
    }
    return null;
  }
}
