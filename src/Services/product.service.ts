import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { ProductEntity } from 'src/entitys/product.entity';
import { ProductDto } from 'src/DOTs/product.dto';





@Injectable()
export class ProductService {
  FindTransprotationByAdminId(id: number): any {
    throw new Error('Method not implemented.');
  }
 
  constructor(
     @InjectRepository(ProductEntity)
      private productRepo: Repository<ProductEntity>,
      
      ){}
 
  
     async AddProduct(product:ProductDto) {
    return this.productRepo.save(product);
     }
 
  async getProductByCategory(@Param("Category") Category: string) {
    const products = await this.productRepo.find({ where: { Category } });
    return products;
  }
  // async getProductByFkid(@Param("AdminId") AdminId: number) {
  //   const products = await this.productRepo.find({ where: { AdminId } });
  //   return products;
  // }


  getProductById(id: number) {
    return this.productRepo.findOneBy({id})
  }
      getallProduct(): any {
        return  this.productRepo.find();
      }

 SearchProductById(id: number) {
    return this.productRepo.findOneBy({id})
  }
      async SearchProductByCategory(@Param("Category") Category: string) {
        const products = await this.productRepo.find({ where: { Category } });
        return products;
      }


      DeleteProduct(id){
    return this.productRepo.delete(id)
  }


 async  updateProductr(productDto:ProductDto,id){
    return this.productRepo.update(id,productDto)
  }
     

  



 


}
