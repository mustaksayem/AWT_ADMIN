import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { ProductEntity } from 'src/entitys/product.entity';
import { ProductDto } from 'src/DOTs/product.dto';





@Injectable()
export class ProductService {
 
  constructor(
     @InjectRepository(ProductEntity)
      private productRepo: Repository<ProductEntity>,
      
      ){}
 
  
     async AddProduct(product:ProductDto) {
    return this.productRepo.save(product);
     }
      // getCustomerByid(id) {
      //   return this.productRepo.findOneBy({id})
      // }
      // getallCustomer(  ): any {
      //   return  this.productRepo.find();
      // }
      // searchCustomer(id) { 
      //   return this.productRepo.findOneBy({id})
      // }

      // async insert(adminDto :AdminDto){

      //   const salt =await bcrypt.genSalt();
      //   const hasse =await bcrypt .hash(adminDto.Password,salt);
      //   adminDto.Password=hasse;
      //   return this.adminRepo.save(adminDto);
      // }

  // done



 


}
