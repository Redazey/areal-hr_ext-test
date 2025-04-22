import {
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { File } from '../../file/entities/file.entity';

@Table({
  timestamps: false,
})
export class Employee extends Model {
  @Column
  last_name: string;

  @Column
  first_name: string;

  @Column
  patronymic: string;

  @Column
  dob: Date;

  @Column
  passport: string;

  @Column
  registration_address: string;

  @ForeignKey(() => File)
  @Column
  passport_scan: number;

  @BelongsTo(() => File)
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
