import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDto, CustomerDto } from './admin.dto';
import { AdminEntity } from './admin.entity';

@Injectable()
export class AdminService {
 
  constructor(
     @InjectRepository(AdminEntity)
      private adminRepo: Repository<AdminEntity>,
      
      ){}
 
  

    insert(user:AdminDto) {
    return this.adminRepo.save(user);
  }
  getUserByid(id) {
    return this.adminRepo.findOneBy({id})
  }
  getallUser(  ): any {
    return  this.adminRepo.find();
  }
  searchUser(id) { 
    return this.adminRepo.findOneBy({id})
  }
  updateUSer(Name,location,id):any{
    return this.adminRepo.update(id,{Name:Name,location:location})
  }
  deleteUserById(id){
    return this.adminRepo.delete(id)
  }

  // done



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
    return 
  }
  deletecustomer(number):any{
    return "delete customer "+number;
  }

  customerExit(id):any{
    if(id==true) return "Customer Exit"
    else return "Customer not exit"
    
  }




}
