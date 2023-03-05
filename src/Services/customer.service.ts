import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDto, } from '../DOTs/admin.dto';
import { AdminEntity } from '../entitys/admin.entity';

import * as bcrypt from 'bcrypt';
import { CustomerEntity } from 'src/entitys/customer.entity';
import { CustomerDto } from 'src/DOTs/customer.dto';




@Injectable()
export class CustomerService {
 
  constructor(
     @InjectRepository(CustomerEntity)
      private customerRepo: Repository<CustomerEntity>,
      
      ){}
     
     


    
 
  
addcustomer(user:CustomerDto) {
        return this.customerRepo.save(user);
 }    

  getCustomerByid(id) {
    return this.customerRepo.findOneBy({id})
  }

  getCustomerByNumber(Number) {
    return this.customerRepo.findOneBy({Number})
  }
  getallCustomer(  ): any {
    return  this.customerRepo.find();
  }

  async  updateCustomer(Dto:CustomerDto,id){
    return this.customerRepo.update(id,Dto)
  }

  DeleteCustomer(id){
    return this.customerRepo.delete(id)
  }
     
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
 

  // customerExit(id):any{
  //   if(id==true) return "Customer Exit"
  //   else return "Customer not exit"
    
  // }




}
