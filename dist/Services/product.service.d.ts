import { Repository } from 'typeorm';
import { ProductEntity } from 'src/entitys/product.entity';
import { ProductDto } from 'src/DOTs/product.dto';
export declare class ProductService {
    private adminRepo;
    constructor(adminRepo: Repository<ProductEntity>);
    insert(user: ProductDto): Promise<ProductDto & ProductEntity>;
    getUserByid(id: any): Promise<ProductEntity>;
    getallUser(): any;
    searchUser(id: any): Promise<ProductEntity>;
    deleteUserById(id: any): Promise<import("typeorm").DeleteResult>;
}
