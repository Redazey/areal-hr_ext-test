import { Column, Default, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class Profession extends Model {
  @Column
  name: string;

  @Column
  comment: string;

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
