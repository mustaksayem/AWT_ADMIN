import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDto, } from '../DOTs/admin.dto';
import { AdminEntity } from '../entitys/admin.entity';

import * as bcrypt from 'bcrypt';
import { CustomerEntity } from 'src/entitys/customer.entity';




@Injectable()
export class CustomerService {
 
  constructor(
     @InjectRepository(CustomerEntity)
      private customerRepo: Repository<CustomerEntity>,
      
      ){}
     
     


    
 
  

  //   insert(user:AdminDto) {
  //   return this.adminRepo.save(user);
  // }
  getCustomerByid(id) {
    return this.customerRepo.findOneBy({id})
  }
  getallCustomer(  ): any {
    return  this.customerRepo.find();
  }
  searchCustomer(id) { 
    return this.customerRepo.findOneBy({id})
  }
  // updateUSer(Name,location,id):any{
  //   return this.adminRepo.update(id,{Name:Name,location:location})
  // }
  // deleteUserById(id){
  //   return this.adminRepo.delete(id)
  // }

  // // done



  // addcustomer(add:CustomerDto):any{
  //   return "Name is :"+add.Name+"  and Numbner is : " + add.Number;

  // }

  // getcustomer(number): any {
  //   return "Get single  customer "+number;
  // }
 
  // searchcustomer(number):any { 
  //   return "search the customer "+number;
  // }
  // updatecustomer(number):any{
  //   return 
  // }
  // deletecustomer(number):any{
  //   return "delete customer "+number;
  // }

  // customerExit(id):any{
  //   if(id==true) return "Customer Exit"
  //   else return "Customer not exit"
    
  // }




}
