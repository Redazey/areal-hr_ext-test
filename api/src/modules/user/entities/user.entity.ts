import {
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from '../../roles/entities/role.entity';

@Table({
  timestamps: false,
  defaultScope: {
    attributes: {
      exclude: ['created_at', 'updated_at', 'deleted_at'],
    },
  },
})
export class User extends Model {
  @Column
  last_name: string;

  @Column
  first_name: string;

  @Column
  patronymic: string;

  @Column
  email: string;

  @Column
  password: string;

  @ForeignKey(() => Role)
  @Column
  role_id: number;

  @BelongsTo(() => Role)
  file: File;

  @Default(null)
  @Column
  deleted_at: Date;

  @Default(Date.now())
  @Column
  updated_at: Date;

  @Default(Date.now())
  @Column
  created_at: Date;
}
