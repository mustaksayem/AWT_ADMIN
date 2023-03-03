import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminEntity } from '../entitys/admin.entity';
import { AdminService } from '../Services/admin.service';
import { CustomerEntity } from 'src/entitys/customer.entity';
import { ProductEntity } from 'src/entitys/product.entity';
import { ProductService } from 'src/Services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity,CustomerEntity,ProductEntity])],
  controllers: [AdminController],
  providers: [AdminService,ProductService],
})
export class AdminModule {}
