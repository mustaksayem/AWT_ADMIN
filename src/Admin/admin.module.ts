import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminEntity } from '../entitys/admin.entity';
import { AdminService } from '../Services/admin.service';
import { CustomerEntity } from 'src/entitys/customer.entity';
import { ProductEntity } from 'src/entitys/product.entity';
import { ProductService } from 'src/Services/product.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { CustomerService } from 'src/Services/customer.service';

@Module({
  imports: [
    
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
                 port: 465,
                 ignoreTLS: true,
                 secure: true,
                 auth: {
                     user: 'mustakhasansayem@gmail.com',
                     pass: 'eashoyjtnlopimad'
                 },
                }
    }),
    
    TypeOrmModule.forFeature([AdminEntity,CustomerEntity,ProductEntity])],
  controllers: [AdminController],
  providers: [AdminService,ProductService,CustomerService],
})
export class AdminModule {}
