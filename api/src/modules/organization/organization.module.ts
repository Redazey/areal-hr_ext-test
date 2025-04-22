import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Organization } from './entities/organization.entity';

@Module({
  imports: [SequelizeModule.forFeature([Organization])],
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule {}
