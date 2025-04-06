import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {ProfessionService} from './profession.service';
import {CreateProfessionDto} from './dto/create-profession.dto';
import {UpdateProfessionDto} from "./dto/update-profession.dto";
import {Profession} from "./entities/profession.entity";
import {JoiValidationPipe} from "../joi-validation/joi-validation.pipe";
import {CreationAttributes} from "sequelize";

@Controller('profession')
export class ProfessionController {
    constructor(private readonly professionService: ProfessionService) {
    }

    @Post()
    create(@Body(new JoiValidationPipe(CreateProfessionDto))
           createProfessionDto: CreationAttributes<Profession>) {
        return this.professionService.create(createProfessionDto);
    }

    @Get()
    findAll() {
        return this.professionService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: string,
           @Body(new JoiValidationPipe(UpdateProfessionDto))
           updateProfessionDto: CreationAttributes<Profession>) {
        return this.professionService.update(+id, updateProfessionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.professionService.remove(+id);
    }
}
