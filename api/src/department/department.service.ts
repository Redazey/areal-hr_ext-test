import {Injectable} from '@nestjs/common';
import {CreateDepartmentDto} from './dto/create-department.dto';
import {UpdateDepartmentDto} from './dto/update-department.dto';
import {Department} from "./entities/department.entity";
import {InjectModel} from "@nestjs/sequelize";
import {CreationAttributes, Op} from "sequelize";
import {Organization} from "../organization/entities/organization.entity";

@Injectable()
export class DepartmentService {
    constructor(
        @InjectModel(Department) private departmentModule: typeof Department,
        @InjectModel(Organization) private organizationModule: typeof Organization,
    ) {
    }

    create(createDepartmentDto: CreationAttributes<Department>) {
        return this.departmentModule.create(createDepartmentDto);
    }

    findAll() {
        return this.departmentModule.findAll({
            include: [{
                model: Organization,
            }],
            where: {
                [Op.or]: [{isDeleted: false}, {isDeleted: null}],
            }
        });
    }

    update(id: number, updateDepartmentDto: CreationAttributes<Department>) {
        return this.departmentModule.update(updateDepartmentDto, {
            where: {
                id: id
            }
        });
    }

    remove(id: number) {
        return this.departmentModule.update({isDeleted: true}, {
            where: {
                id: id
            }
        });
    }
}
