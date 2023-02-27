import { AdminDto, CustomerDto } from './admin.dto';
import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    insert(user: AdminDto): any;
    getallUser(): string;
    getUserByid(id: number): any;
    SearchUser(id: number): any;
    updateUser(id: number): any;
    delteteUser(id: number): any;
    addcustomer(dto: CustomerDto): any;
    Searccustomer(number: string): string;
    updatecustomer(number: string): string;
    deltetecustomer(number: string): string;
    customerExit(id: number): any;
}
