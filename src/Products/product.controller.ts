import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductDto } from 'src/DOTs/product.dto';
import { ProductService } from 'src/Services/product.service';
import { AdminDto } from '../DOTs/admin.dto';
import{ CustomerDto } from '../DOTs/customer.dto';
import { AdminService } from '../Services/admin.service';

@Controller('admin')
export class ProductController {
  constructor(private readonly adminService: ProductService) {}

 
  @Post("/adduser")
  @UsePipes(new ValidationPipe)
  insert(@Body() user:ProductDto):any {
    return this.adminService.insert(user);
  }

   @Get("alluser")
  getallUser(): any {
    return this.adminService.getallUser();
  }
  @Get("/:id")
  getUserByid(@Param("id" ,ParseIntPipe) id:number): any {
    return this.adminService.getUserByid(id);
  }
  @Get("/searchuser/:id")
  SearchUser(@Param ("id",ParseIntPipe) id:number): any {
    return this.adminService.searchUser(id);
  }
  @Put("/updateuser/:id")
  @UsePipes(new ValidationPipe)
  updateUser(
    
    @Body ("Name") Name:string,
    @Body ("location") location:string,
    @Body ("id") id:number
    ):any{
    //return this.adminService.updateUSer(Name,location,id);
  }
  @Delete("/deleteuser/:id")
  deleteUserById(@Param ("id") id:number):any{
    return this.adminService.deleteUserById(id);
  
  }
// done


  



  
}
