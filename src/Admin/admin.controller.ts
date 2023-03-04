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
import { CustomerService } from 'src/Services/customer.service';
import { ProductDto } from 'src/DOTs/product.dto';
import { ProductService } from 'src/Services/product.service';



@Controller('admin')
export class AdminController {
  //customerCervice: any;
  
  //constructor(private readonly productServices: ProductService),
  constructor(
    private readonly adminService: AdminService,
   private readonly productService: ProductService
  ) { }


  // @UseGuards(SessionGuard)
  // @Get("/index")
  // getAdmin(@Session() session): any {
  //   console.log(session.agencyid);
  //   return this.agencyService.getIndex();
  // }

  @UseGuards(SessionGuard)
  @Get("/getindex")
  Profile(@Session() session ): any {
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
    AdminSingUp(@Body() admindto: AdminDto, @UploadedFile(new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 160000000 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) file: Express.Multer.File) {

    admindto.fileName = file.filename;

    return this.adminService.AdminSingUp(admindto);
    //console.log(file)
  }


  @Get('/AdminSignIn')
AdminSignIn(@Session() session, @Body() admindto:AdminDto)
{


if(this.adminService.AdminSignIn(admindto))
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








@UseGuards(SessionGuard)
    @Post("/addProduct")
    @UseInterceptors(FileInterceptor('file', 
    {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname)
        }
      })

    }))
  //  @UsePipes(new ValidationPipe)
  //   AddProduct(@Body() product:ProductDto):any {
  //     return this.productService.AddProduct(product);
  //   }
    @UseGuards(SessionGuard)
    AddProduct(@Body() productDto: ProductDto, @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 160000000 }),
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File) {
  
      productDto.Image = file.filename;
  
      return this.productService.AddProduct(productDto);
      console.log(file)
    }


    @UseGuards(SessionGuard)
     @Get("/allproduct")
     getallProduct(): any {
      return this.productService.getallProduct();
    }
    @UseGuards(SessionGuard)
    @Get("getProductByCategory/:Category")
    getProductByCategory(@Param("Category"  ) Category:string): any {
      return this.productService.getProductByCategory(Category);
    }
    @UseGuards(SessionGuard)
    @Get("/getProductById/:id")
    getProductById(@Param ("id",ParseIntPipe) id:number): any {
      return this.productService.getProductById(id);
    }



    @UseGuards(SessionGuard)
    @Get("SearchProductByCategory/:Category")
    SearchProductByCategory(@Param("Category"  ) Category:string): any {
      return this.productService.SearchProductByCategory(Category);
    }


   @UseGuards(SessionGuard)
    @Get("/searchProductById/:id")
    SearchProductById(@Param ("id",ParseIntPipe) id:number): any {
      return this.productService.SearchProductById(id);
    }



    @UseGuards(SessionGuard)
    @Delete("/deleteProduct/:id")
    @UsePipes(new ValidationPipe)
    DeleteProduct(@Param ("id") id:number):any{
      return this.productService.DeleteProduct(id);

    }



    @UseGuards(SessionGuard)
    @Put("/updateproduct/:id")
   @UsePipes(new ValidationPipe()) 
   async  updateProductr(

      @Body () productDto:ProductDto,
      @Param("id") id:number
     
      ){
      return this.productService.updateProductr(productDto,id);
    }

    @Post('/sendemail')
    sendEmail(@Body() mydata){
    return this.adminService.sendEmail(mydata);
    }

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


