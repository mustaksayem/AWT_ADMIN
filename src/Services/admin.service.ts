import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDto, } from '../DOTs/admin.dto';
import { AdminEntity } from '../entitys/admin.entity';

import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';




@Injectable()
export class AdminService {
 // mailerService: any;
 
  constructor(
     @InjectRepository(AdminEntity)
      private adminRepo: Repository<AdminEntity>,
      private mailerService: MailerService
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
 

    // async sendEmail(mydata,file){
    //   return   await this.mailerService.sendMail({
    //          to: mydata.email,
    //          subject: mydata.subject,
    //          text: mydata.text,
    //          attachments: [
    //           {
    //             filename: file.originalname,
    //             content: file.buffer,
    //             encoding: 'base64'
    //           }
    //         ]
            
    //        });
     
    //  }
    async sendEmail(mydata, file){
      if (!mydata.email) {
        throw new Error('Recipient email address is missing');
      }
      const attachments = [];
      if (file) {
        attachments.push({
          filename: file.originalname,
          content: file.buffer,//temporary storage area for data in memory.
          encoding: 'base64' //Base64 encoding is commonly used to transmit binary data over text-based protocols 
        });
      }
      return await this.mailerService.sendMail({
        to: mydata.email,
        subject: mydata.subject,
        text: mydata.text,
        attachments: attachments
      });
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
