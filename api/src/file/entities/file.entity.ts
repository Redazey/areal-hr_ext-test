import {Column, Default, Model, Table} from 'sequelize-typescript';

@Table
export class File extends Model {
    @Column
    name: string;

    @Column
    path: string;

    @Default(false)
    @Column
    isDeleted: boolean;
}
