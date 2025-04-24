import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreationAttributes, Op } from 'sequelize';
import { User } from './entities/user.entity';
import { Role } from '../roles/entities/role.entity';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModule: typeof User) {}

  async create(createUserDto: CreationAttributes<User>) {
    createUserDto.password = await argon2.hash(createUserDto.password, {
      type: argon2.argon2id,
    });
    return this.userModule.create(createUserDto);
  }

  findOne(email: string) {
    return this.userModule.findOne({
      where: {
        email: email,
      },
    });
  }

  findById(userId: number) {
    return this.userModule.findByPk(userId);
  }

  async findAll() {
    const users = await this.userModule.findAll({
      include: [
        {
          model: Role,
        },
      ],
      where: {
        [Op.or]: [{ deleted_at: null }],
      },
    });

    return users.map((user) => {
      const patronymic = user.patronymic ? user.patronymic : 'отсутствует';
      const role = user.role.name
        ? user.role.name
        : null;

      return {
        id: user.id,
        last_name: user.last_name,
        first_name: user.first_name,
        patronymic: patronymic,
        email: user.email,
        role: role,
      };
    });
  }

  async update(id: number, updateUserDto: CreationAttributes<User>) {
    if (updateUserDto.password) {
      updateUserDto.password = await argon2.hash(updateUserDto.password, {
        type: argon2.argon2id,
      });
    }
    return this.userModule.update(updateUserDto, {
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.userModule.update(
      { deleted_at: new Date() },
      {
        where: { id: id },
      },
    );
  }
}
