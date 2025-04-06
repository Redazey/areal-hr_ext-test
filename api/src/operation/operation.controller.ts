import {Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import {OperationService} from './operation.service';
import {CreateOperationDto} from './dto/create-operation.dto';
import {CreationAttributes} from "sequelize";
import {Operation} from "./entities/operation.entity";
import {JoiValidationPipe} from "../joi-validation/joi-validation.pipe";

@Controller('operation')
export class OperationController {
    constructor(private readonly operationService: OperationService) {
    }

    @Post()
    create(@Body(new JoiValidationPipe(CreateOperationDto))
           createOperationDto: CreationAttributes<Operation>) {
        return this.operationService.create(createOperationDto);
    }

    @Get()
    findAll() {
        return this.operationService.findAll();
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.operationService.remove(+id);
    }
}
