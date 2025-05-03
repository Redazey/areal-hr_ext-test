import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { OrganizationModule } from './modules/organization/organization.module';
import * as dotenv from 'dotenv';
import { DepartmentModule } from './modules/department/department.module';
import { ProfessionModule } from './modules/profession/profession.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileModule } from './modules/file/file.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { OperationModule } from './modules/operation/operation.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { RolesModule } from './modules/roles/roles.module';
import { ChangeModule } from './modules/change/change.module';
import { ChangeLoggerMiddleware } from './common/middlewares/change-logger.middleware';
import * as process from 'node:process';

dotenv.config({
  path: `../${process.env.NODE_ENV ? process.env.NODE_ENV : ''}.env`,
});

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
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
    AuthModule,
    UserModule,
    RolesModule,
    ChangeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ChangeLoggerMiddleware).exclude('/auth/login').forRoutes(
      {
        path: '*',
        method: RequestMethod.POST,
      },
      {
        path: '*',
        method: RequestMethod.PATCH,
      },
    );
  }
}
