// src/organizations/organization.model.ts
import {Column, Default, Model, Table} from 'sequelize-typescript';

@Table
export class Organization extends Model {
    @Column
    name: string;

    @Column
    comment: string;

    @Default(false)
    @Column
    isDeleted: boolean;
}
