import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDto, } from '../DOTs/admin.dto';
import { AdminEntity } from '../entitys/admin.entity';

import * as bcrypt from 'bcrypt';




@Injectable()
export class AdminService {
 
  constructor(
     @InjectRepository(AdminEntity)
      private adminRepo: Repository<AdminEntity>,
      
      ){}
     
      Profile() :string {
        return "this is the admin profile";
      }


      async AdminSingUp(adminDto :AdminDto){

        const salt =await bcrypt.genSalt();
        const hasse =await bcrypt .hash(adminDto.Password,salt);
        adminDto.Password=hasse;
        return this.adminRepo.save(adminDto);
      }

      async AdminSignIn(admindto:AdminDto){
        console.log(admindto.Password);
    const data= await this.adminRepo.findOneBy({Email: admindto.Email});
    const isMatch= await bcrypt.compare(admindto.Password, data.Password);
    if(isMatch) {
    return  data.id;
    
    }
    else {
        return 0;
    }
    
    }
 
  

  //   insert(user:AdminDto) {
  //   return this.adminRepo.save(user);
  // }
  // getUserByid(id) {
  //   return this.adminRepo.findOneBy({id})
  // }
  // getallUser(  ): any {
  //   return  this.adminRepo.find();
  // }
  // searchUser(id) { 
  //   return this.adminRepo.findOneBy({id})
  // }
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
