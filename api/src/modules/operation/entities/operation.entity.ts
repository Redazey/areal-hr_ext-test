import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';
import { Employee } from '../../employee/entities/employee.entity';
import { Profession } from '../../profession/entities/profession.entity';
import { Department } from '../../department/entities/department.entity';

@Table({
  timestamps: false,
  defaultScope: {
    attributes: {
      exclude: ['created_at', 'updated_at', 'deleted_at'],
    },
  },
})
export class Operation extends Model {
  @ForeignKey(() => Employee)
  @Column
  employee_id: number;

  @BelongsTo(() => Employee)
  employee: Employee;

  @ForeignKey(() => Profession)
  @Column
  profession_id: number;

  @BelongsTo(() => Profession)
  profession: Profession;

  @ForeignKey(() => Department)
  @Column
  department_id: number;

  @BelongsTo(() => Department)
  department: Department;

  @Default(22440) // МРОТ По Ярославской области
  @Column
  salary: number;

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
