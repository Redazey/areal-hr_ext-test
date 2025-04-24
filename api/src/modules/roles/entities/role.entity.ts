import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
  defaultScope: {
    attributes: {
      exclude: ['created_at', 'updated_at', 'deleted_at'],
    },
  },
})
export class Role extends Model {
  @Column
  name: string;
}
