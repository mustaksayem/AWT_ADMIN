/// <reference types="multer" />
import { AdminDto } from '../DOTs/admin.dto';
import { AdminService } from '../Services/admin.service';
import { ProductDto } from 'src/DOTs/product.dto';
import { ProductService } from 'src/Services/product.service';
export declare class AdminController {
    private readonly adminService;
    private readonly productService;
    constructor(adminService: AdminService, productService: ProductService);
    Profile(session: any): any;
    AdminSingUp(admindto: AdminDto, file: Express.Multer.File): Promise<AdminDto & import("../entitys/admin.entity").AdminEntity>;
    AdminSignIn(session: any, admindto: AdminDto): {
        message: string;
    };
    AddProduct(productDto: ProductDto, file: Express.Multer.File): Promise<ProductDto & import("../entitys/product.entity").ProductEntity>;
    getallProduct(): any;
    getProductByCategory(Category: string): any;
    getProductById(id: number): any;
    SearchProductByCategory(Category: string): any;
    SearchProductById(id: number): any;
    DeleteProduct(id: number): any;
    updateProductr(productDto: ProductDto, id: number): Promise<import("typeorm").UpdateResult>;
    sendEmail(mydata: any): Promise<any>;
}
