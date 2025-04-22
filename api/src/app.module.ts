import { Module } from '@nestjs/common';
import { OrganizationModule } from './modules/organization/organization.module';
import * as dotenv from 'dotenv';
import { DepartmentModule } from './modules/department/department.module';
import { ProfessionModule } from './modules/profession/profession.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileModule } from './modules/file/file.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { OperationModule } from './modules/operation/operation.module';

dotenv.config({
  path: `../${process.env.NODE_ENV ? process.env.NODE_ENV : ''}.env`,
});

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
    OrganizationModule,
    DepartmentModule,
    ProfessionModule,
    FileModule,
    EmployeeModule,
    OperationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
