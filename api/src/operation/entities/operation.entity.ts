import {Column, Model, Table, ForeignKey, BelongsTo, Unique, Default} from 'sequelize-typescript';
import {Organization} from "../../organization/entities/organization.entity";
import {Employee} from "../../employee/entities/employee.entity";
import {Profession} from "../../profession/entities/profession.entity";
import {Department} from "../../department/entities/department.entity";

@Table
export class Operation extends Model {
    @ForeignKey(() => Employee)
    @Column
    employeeId: number;

    @BelongsTo(() => Employee)
    employee: Employee;

    @ForeignKey(() => Profession)
    @Column
    professionId: number;

    @BelongsTo(() => Profession)
    profession: Profession;

    @ForeignKey(() => Department)
    @Column
    departmentId: number;

    @BelongsTo(() => Department)
    department: Department;

    @Default(22440) // МРОТ По Ярославской области
    @Column
    salary: number;

    @Default(false)
    @Column
    isDeleted: boolean;
}
