import { ProductDto } from 'src/DOTs/product.dto';
import { ProductService } from 'src/Services/product.service';
export declare class ProductController {
    private readonly adminService;
    constructor(adminService: ProductService);
    insert(user: ProductDto): any;
    getallUser(): any;
    getUserByid(id: number): any;
    SearchUser(id: number): any;
    updateUser(Name: string, location: string, id: number): any;
    deleteUserById(id: number): any;
}
