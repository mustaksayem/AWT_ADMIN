import { AdminDto, CustomerDto } from './admin.dto';
import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    insert(user: AdminDto): any;
    getallUser(): any;
    getUserByid(id: number): any;
    SearchUser(id: number): any;
    updateUser(Name: string, location: string, id: number): any;
    deleteUserById(id: number): any;
    addcustomer(dto: CustomerDto): any;
    Searccustomer(number: string): string;
    updatecustomer(number: string): string;
    deltetecustomer(number: string): string;
    customerExit(id: number): any;
}
