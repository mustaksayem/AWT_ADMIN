import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './entitys/admin.entity';
import { AdminModule } from './Admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Products/product.module';
import { ProductEntity } from './entitys/product.entity';
//import { MulterModule } from '@nestjs/platform-express';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
//import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    
    MulterModule.register({
     
    }),
    // MulterModule.forRoot({
    //   transport: {
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     ignoreTLS: true,
    //     secure: true,
    //     auth: {
    //       user: 'Ecommerce2023@gmail.com',
    //       pass: 'gqdgqqwhfmwbuhvt'
    //     },
    //   }
    // }),
    
    
    
    AdminModule,ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'Admin',
      entities: [AdminEntity,ProductEntity],
      autoLoadEntities:true,
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// function diskStorage(arg0: { destination: string; }): any {
//   throw new Error('Function not implemented.');
// }

