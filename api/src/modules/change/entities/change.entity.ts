import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
  defaultScope: {
    attributes: {
      exclude: ['created_at', 'updated_at', 'deleted_at'],
    },
  },
})
export class Change extends Model {
  @Column
  timestamp: Date;

  @Column
  user: string;

  @Column
  entity: string;

  @Column
  changes: string;
}
