/// <reference types="multer" />
import { AdminDto } from '../DOTs/admin.dto';
import { CustomerDto } from '../DOTs/customer.dto';
import { AdminService } from '../Services/admin.service';
import { CustomerService } from 'src/Services/customer.service';
import { ProductDto } from 'src/DOTs/product.dto';
import { ProductService } from 'src/Services/product.service';
export declare class AdminController {
    private readonly adminService;
    private readonly productService;
    private readonly customerService;
    constructor(adminService: AdminService, productService: ProductService, customerService: CustomerService);
    Profile(session: any): any;
    AdminSingUp(admindto: AdminDto, file: Express.Multer.File): Promise<AdminDto & import("../entitys/admin.entity").AdminEntity>;
    AdminSignIn(session: any, admindto: AdminDto): {
        message: string;
    };
    getAdminById(id: number): any;
    DeleteAdmin(id: number): any;
    update(admindto: AdminDto, id: number): Promise<import("typeorm").UpdateResult>;
    AddProduct(productDto: ProductDto, file: Express.Multer.File): Promise<ProductDto & import("../entitys/product.entity").ProductEntity>;
    getallProduct(): any;
    getProductByCategory(Category: string): any;
    getProductById(id: number): any;
    SearchProductByCategory(Category: string): any;
    SearchProductById(id: number): any;
    FindTransprotationByAdminId(id: number): any;
    DeleteProduct(id: number): any;
    updateProductr(productDto: ProductDto, id: number): Promise<import("typeorm").UpdateResult>;
    sendEmail(mydata: any, file: any): Promise<any>;
    addcustomer(dto: CustomerDto): any;
    getCustomerByid(id: number): any;
    updateCustomer(Dto: CustomerDto, id: number): Promise<import("typeorm").UpdateResult>;
    DeleteCustomer(id: number): any;
}
