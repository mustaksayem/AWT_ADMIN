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
   private readonly productService: ProductService,
   private readonly customerService :CustomerService
  ) { }


// admin part

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
@Get("/getAdminById/:id")
getAdminById(@Param ("id",ParseIntPipe) id:number): any {
  return this.adminService.getAdminById(id);
}
    


    @UseGuards(SessionGuard)
    @Delete("/deleteAdmin/:id")
    @UsePipes(new ValidationPipe)
    DeleteAdmin(@Param ("id") id:number):any{
      return this.adminService.DeleteAdmin(id);

    }
    @UseGuards(SessionGuard)
    @Put("/update/:id")
    @UsePipes(new ValidationPipe())
    async update(@Body() admindto: AdminDto, @Param('id') id: number) {
      return this.adminService.update(admindto, id);
    }






    // @Get("/Transprotation/view/:id")??
    //  GetBudgetReqById(@Param("id", ParseIntPipe) id: number): any {
    //     return this.productService.get(id);
    //    }






                  //// product part   /////


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


     @Get("/allproduct")
     getallProduct(): any {
      return this.productService.getallProduct();
    }
  
    @Get("getProductByCategory/:Category")
    getProductByCategory(@Param("Category"  ) Category:string): any {
      return this.productService.getProductByCategory(Category);
    }
    // @Get("getProductByCategory/:AdminId")
    // getProductByFkid(@Param("AdminId"  ) AdminId:number): any {
    //   return this.productService.getProductByFkid(AdminId);
    // }

    @Get("/getProductById/:id")
    getProductById(@Param ("id",ParseIntPipe) id:number): any {
      return this.productService.getProductById(id);
    }



    
    @Get("SearchProductByCategory/:Category")
    SearchProductByCategory(@Param("Category"  ) Category:string): any {
      return this.productService.SearchProductByCategory(Category);
    }


    @Get("/searchProductById/:id")
    SearchProductById(@Param ("id",ParseIntPipe) id:number): any {
      return this.productService.SearchProductById(id);
    }

@Get("/TransprotationByAdminId/:id")
FindTransprotationByAdminId(@Param ("id",ParseIntPipe) id:number): any {
      return this.adminService.FindTransprotationByAdminId(id);
    }


   
    @Delete("/deleteProduct/:id")
    @UsePipes(new ValidationPipe)
    DeleteProduct(@Param ("id") id:number):any{
      return this.productService.DeleteProduct(id);

    }



    @Put("/updateproduct/:id")
   @UsePipes(new ValidationPipe()) 
   async  updateProductr(

      @Body () productDto:ProductDto,
      @Param("id") id:number
     
      ){
      return this.productService.updateProductr(productDto,id);
    }

   

    //@UseGuards(SessionGuard)
    @Post('/sendemail')
    @UseInterceptors(FileInterceptor('file'))
    async sendEmail(@Body() mydata, @UploadedFile() file){
        return await this.adminService.sendEmail(mydata, file);
    }
  



                                  ///// customer start  

 
    @Post("/addcustomer")
    @UsePipes(new ValidationPipe())
    addcustomer(@Body() dto:CustomerDto):any {
      return this.customerService.addcustomer(dto);
    }


 
    @Get("getcustomerbyid/:id")
    getCustomerByid(@Param("id") id:number): any {
      return this.customerService.getCustomerByid(id);
    }




   
    @Put("/updatecustomer/:id")
    @UsePipes(new ValidationPipe()) 
    async  updateCustomer(
       @Body () Dto:CustomerDto,
       @Param("id") id:number
      
       ){
       return this.customerService.updateCustomer(Dto,id);
     }


    
       @Delete("/deletecustomer/:id")
       DeleteCustomer(@Param ("id") id:number):any{
      return this.customerService.DeleteCustomer(id);

    }

   

    










}


