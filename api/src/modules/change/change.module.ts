import { Module } from '@nestjs/common';
import { ChangeService } from './change.service';
import { ChangeController } from './change.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Change } from './entities/change.entity';

@Module({
  imports: [SequelizeModule.forFeature([Change])],
  controllers: [ChangeController],
  providers: [ChangeService],
})
export class ChangeModule {}
