// src/departments/department.model.ts
import {Column, Model, Table, ForeignKey, BelongsTo, Unique, Default} from 'sequelize-typescript';
import {Organization} from "../../organization/entities/organization.entity";

@Table
export class Department extends Model {
    @Column
    name: string;

    @Column
    comment: string;

    @ForeignKey(() => Department)
    @Column
    parentDepartmentId: number;

    @BelongsTo(() => Department)
    parentDepartment: Department;

    @ForeignKey(() => Organization)
    @Column
    organizationId: number;

    @BelongsTo(() => Organization)
    organization: Organization;

    @Default(false)
    @Column
    isDeleted: boolean;
}
