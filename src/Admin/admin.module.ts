import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminEntity } from '../entitys/admin.entity';
import { AdminService } from '../Services/admin.service';
import { CustomerEntity } from 'src/entitys/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity,CustomerEntity])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
