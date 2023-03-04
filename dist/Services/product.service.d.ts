import { Repository } from 'typeorm';
import { ProductEntity } from 'src/entitys/product.entity';
import { ProductDto } from 'src/DOTs/product.dto';
export declare class ProductService {
    private productRepo;
    constructor(productRepo: Repository<ProductEntity>);
    AddProduct(product: ProductDto): Promise<ProductDto & ProductEntity>;
    getProductByCategory(Category: string): Promise<ProductEntity[]>;
    getProductById(id: number): Promise<ProductEntity>;
    getallProduct(): any;
    SearchProductById(id: number): Promise<ProductEntity>;
    SearchProductByCategory(Category: string): Promise<ProductEntity[]>;
    DeleteProduct(id: any): Promise<import("typeorm").DeleteResult>;
    updateProductr(productDto: ProductDto, id: any): Promise<import("typeorm").UpdateResult>;
}
