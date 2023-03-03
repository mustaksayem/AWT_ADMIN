import { Repository } from 'typeorm';
import { ProductEntity } from 'src/entitys/product.entity';
import { ProductDto } from 'src/DOTs/product.dto';
export declare class ProductService {
    private productRepo;
    constructor(productRepo: Repository<ProductEntity>);
    AddProduct(product: ProductDto): Promise<ProductDto & ProductEntity>;
}
