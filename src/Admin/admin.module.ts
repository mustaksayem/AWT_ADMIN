import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminEntity } from '../entitys/admin.entity';
import { AdminService } from '../Services/admin.service';
import { CustomerEntity } from 'src/entitys/customer.entity';
import { ProductEntity } from 'src/entitys/product.entity';
import { ProductService } from 'src/Services/product.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
                 port: 465,
                 ignoreTLS: true,
                 secure: true,
                 auth: {
                     user: 'rana.matubber.41959@gmail.com',
                     pass: 'eblwfruiufmkkpnx'
                 },
                }
    }),
    
    TypeOrmModule.forFeature([AdminEntity,CustomerEntity,ProductEntity])],
  controllers: [AdminController],
  providers: [AdminService,ProductService],
})
export class AdminModule {}
