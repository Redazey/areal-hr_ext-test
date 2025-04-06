import { Module } from '@nestjs/common';
import { OrganizationModule } from './organization/organization.module';
import * as dotenv from 'dotenv';
import { DepartmentModule } from './department/department.module';
import { ProfessionModule } from './profession/profession.module';
import {SequelizeModule} from "@nestjs/sequelize";
import { FileModule } from './file/file.module';

dotenv.config ({ path: `../${process.env.NODE_ENV ? process.env.NODE_ENV :''}.env` });

@Module({
  imports: [
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: 'localhost',
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadModels: true,
        synchronize: true,
      }),
      OrganizationModule, DepartmentModule, ProfessionModule, FileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
