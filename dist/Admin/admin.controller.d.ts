/// <reference types="multer" />
import { AdminDto } from '../DOTs/admin.dto';
import { AdminService } from '../Services/admin.service';
import { ProductDto } from 'src/DOTs/product.dto';
import { ProductService } from 'src/Services/product.service';
export declare class AdminController {
    private readonly adminService;
    private readonly productService;
    constructor(adminService: AdminService, productService: ProductService);
    getProfile(session: any): any;
    insert(admindto: AdminDto, file: Express.Multer.File): Promise<AdminDto & import("../entitys/admin.entity").AdminEntity>;
    signin(session: any, admindto: AdminDto): {
        message: string;
    };
    AddProduct(productDto: ProductDto, file: Express.Multer.File): Promise<ProductDto & import("../entitys/product.entity").ProductEntity>;
}
