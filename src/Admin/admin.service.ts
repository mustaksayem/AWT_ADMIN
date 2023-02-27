import { Body, Injectable } from '@nestjs/common';
import { AdminDto, CustomerDto } from './admin.dto';

@Injectable()
export class AdminService {
 
 
 
  

  adduser(add:AdminDto): any {
    return "Name is :"+add.Name+" ; Id is  : "+add.id+ " and , location is : " + add.location;
  }
  getUser(id): any {
    return "Get single  user id is : "+id;
  }
  getallUser(  ): any {
    return "Get all user ";
  }
  searchUser(id):any { 
    return "search the user "+id;
  }
  updateUSer(id):any{
    return "update user "+id;
  }
  deleteUser(id):any{
    return "delete user "+id;
  }



  addcustomer(add:CustomerDto):any{
    return "Name is :"+add.Name+"  and Numbner is : " + add.number;

  }

  getcustomer(number): any {
    return "Get single  customer "+number;
  }
 
  searchcustomer(number):any { 
    return "search the customer "+number;
  }
  updatecustomer(number):any{
    return "update customer "+number;
  }
  deletecustomer(number):any{
    return "delete customer "+number;
  }

  customerExit(id):any{
    if(id==true) return "Customer Exit"
    else return "Customer not exit"
    
  }




}
