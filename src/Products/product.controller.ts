import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductDto } from 'src/DOTs/product.dto';
import { ProductService } from 'src/Services/product.service';
import { AdminDto } from '../DOTs/admin.dto';
import{ CustomerDto } from '../DOTs/customer.dto';
import { AdminService } from '../Services/admin.service';

@Controller('admin')
export class ProductController {
  constructor(private readonly adminService: ProductService) {}

 
  // @Post("/addProduct")
  // @UsePipes(new ValidationPipe)
  // AddProduct(@Body() user:ProductDto):any {
  //   return this.adminService.insert(user);
  // }

  
  



  
}
