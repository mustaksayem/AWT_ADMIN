import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { ProductEntity } from 'src/entitys/product.entity';
import { ProductDto } from 'src/DOTs/product.dto';





@Injectable()
export class ProductService {
 
  constructor(
     @InjectRepository(ProductEntity)
      private adminRepo: Repository<ProductEntity>,
      
      ){}
 
  

    insert(user:ProductDto) {
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
 
  deleteUserById(id){
    return this.adminRepo.delete(id)
  }

  // done



 


}
