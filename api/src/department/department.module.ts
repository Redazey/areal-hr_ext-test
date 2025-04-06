import {Module} from '@nestjs/common';
import {DepartmentService} from './department.service';
import {DepartmentController} from './department.controller';
import {SequelizeModule} from '@nestjs/sequelize';
import {Department} from "./entities/department.entity";
import {Organization} from "../organization/entities/organization.entity";

@Module({
    imports: [
        SequelizeModule.forFeature([Department]),
        SequelizeModule.forFeature([Organization])],
    controllers: [DepartmentController],
    providers: [DepartmentService],
})
export class DepartmentModule {
}
