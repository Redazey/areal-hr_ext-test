import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';
import { Organization } from '../../organization/entities/organization.entity';

@Table({
  timestamps: false,
  defaultScope: {
    attributes: {
      exclude: ['created_at', 'updated_at', 'deleted_at'],
    },
  },
})
export class Department extends Model {
  @Column
  name: string;

  @Column
  comment: string;

  @ForeignKey(() => Department)
  @Column
  parent_department_id: number;

  @BelongsTo(() => Department)
  parent_department: Department;

  @ForeignKey(() => Organization)
  @Column
  organization_id: number;

  @BelongsTo(() => Organization)
  organization: Organization;

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
