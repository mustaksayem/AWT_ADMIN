import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseBoolPipe, ParseFilePipe, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Session, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { ExpressAdapter, FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { AdminDto } from '../DOTs/admin.dto';
import { CustomerDto } from '../DOTs/customer.dto';
import { AdminService } from '../Services/admin.service';
import { SessionGuard } from './session.guard';
import * as fs from 'fs';
//import * as moment from 'moment'; 
import { Request, Response } from 'express';
import { diskStorage } from 'multer';
import session from 'express-session';



@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }


  // @UseGuards(SessionGuard)
  // @Get("/index")
  // getAdmin(@Session() session): any {
  //   console.log(session.agencyid);
  //   return this.agencyService.getIndex();
  // }

  @UseGuards(SessionGuard)
  @Get("/getindex")
  getProfile(@Session() session ): any {
    console.log(session.Email);
    return this.adminService.Profile();
  }

  @Post('/signup')
  @UseInterceptors(FileInterceptor('file', 
    {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname)
        }
      })

    }))
  insert(@Body() admindto: AdminDto, @UploadedFile(new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 160000000 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) file: Express.Multer.File) {

    admindto.fileName = file.filename;

    return this.adminService.insert(admindto);
    //console.log(file)
  }


  @Get('/signin')
signin(@Session() session, @Body() admindto:AdminDto)
{


if(this.adminService.signin(admindto))
{
  session.Email = admindto.Email;

  console.log(session.Email);
  return {message:" login success"};

}
else
{
  return {message:"login  faild"};
}
 
}









  //   @Post("/adduser")
  //   @UsePipes(new ValidationPipe)
  //   insert(@Body() user:AdminDto):any {
  //     return this.adminService.insert(user);
  //   }

  //    @Get("alluser")
  //   getallUser(): any {
  //     return this.adminService.getallUser();
  //   }
  //   @Get("/:id")
  //   getUserByid(@Param("id" ,ParseIntPipe) id:number): any {
  //     return this.adminService.getUserByid(id);
  //   }
  //   @Get("/searchuser/:id")
  //   SearchUser(@Param ("id",ParseIntPipe) id:number): any {
  //     return this.adminService.searchUser(id);
  //   }
  //   @Put("/updateuser/:id")
  //   @UsePipes(new ValidationPipe)
  //   updateUser(

  //     @Body ("Name") Name:string,
  //     @Body ("location") location:string,
  //     @Body ("id") id:number
  //     ):any{
  //     return this.adminService.updateUSer(Name,location,id);
  //   }
  //   @Delete("/deleteuser/:id")
  //   deleteUserById(@Param ("id") id:number):any{
  //     return this.adminService.deleteUserById(id);

  //   }
  // // done


  //   @Post("/addcustomer")
  //   @UsePipes(new ValidationPipe)
  //   addcustomer(@Body() dto:CustomerDto):any {
  //     return this.adminService.addcustomer(dto);
  //   }


  //   // @Get("/:number")
  //   // getcustomer(@Param("number") number:string): any {
  //   //   return this.adminService.getUser(number);
  //   // }
  //   @Get("/searchcustomer/:number")
  //   Searccustomer(@Param ("number") number:string): string {
  //     return this.adminService.searchcustomer(number);
  //   }
  //   @Put("/updatecustomer/:number")
  //   updatecustomer(@Param ("number") number:string):string{
  //     return this.adminService.updatecustomer(number);
  //   }
  //   @Delete("/deletecustomer/:number")
  //   deltetecustomer(@Param ("number") number:string):string{
  //     return this.adminService.deletecustomer(number);

  //   }
  //   @Get("/customerexit/:id")
  //   customerExit(@Param ("id" ,ParseBoolPipe) id:number): any{
  //     return this.adminService.customerExit(id)
  //   }




}
function moment() {
  throw new Error('Function not implemented.');
}

