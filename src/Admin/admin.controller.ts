import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminDto, CustomerDto } from './admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

 
  @Post("/adduser")
  @UsePipes(new ValidationPipe)
  insert(@Body() user:AdminDto):any {
    return this.adminService.insert(user);
  }

   @Get("alluser")
  getallUser(): string {
    return this.adminService.getallUser();
  }
  @Get("/:id")
  getUserByid(@Param("id" ,ParseIntPipe) id:number): any {
    return this.adminService.getUserByid(id);
  }
  @Get("/searchuser/:id")
  SearchUser(@Param ("id") id:number): any {
    return this.adminService.searchUser(id);
  }
  @Put("/updateuser/:id")
  updateUser(@Param ("id") id:number):any{
    return this.adminService.updateUSer(id);
  }
  @Delete("/deleteuser/:id")
  delteteUser(@Param ("id") id:number):any{
    return this.adminService.deleteUser(id);
  
  }



  @Post("/addcustomer")
  @UsePipes(new ValidationPipe)
  addcustomer(@Body() dto:CustomerDto):any {
    return this.adminService.addcustomer(dto);
  }

  
  // @Get("/:number")
  // getcustomer(@Param("number") number:string): any {
  //   return this.adminService.getUser(number);
  // }
  @Get("/searchcustomer/:number")
  Searccustomer(@Param ("number") number:string): string {
    return this.adminService.searchcustomer(number);
  }
  @Put("/updatecustomer/:number")
  updatecustomer(@Param ("number") number:string):string{
    return this.adminService.updatecustomer(number);
  }
  @Delete("/deletecustomer/:number")
  deltetecustomer(@Param ("number") number:string):string{
    return this.adminService.deletecustomer(number);
  
  }
  @Get("/customerexit/:id")
  customerExit(@Param ("id" ,ParseBoolPipe) id:number): any{
    return this.adminService.customerExit(id)
  }



  
}
