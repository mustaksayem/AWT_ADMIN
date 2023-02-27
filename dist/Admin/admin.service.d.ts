import { Repository } from 'typeorm';
import { AdminDto, CustomerDto } from './admin.dto';
import { AdminEntity } from './admin.entity';
export declare class AdminService {
    private adminRepo;
    constructor(adminRepo: Repository<AdminEntity>);
    insert(user: AdminDto): Promise<AdminDto & AdminEntity>;
    getUser(id: any): any;
    getallUser(): any;
    searchUser(id: any): any;
    updateUSer(id: any): any;
    deleteUser(id: any): any;
    addcustomer(add: CustomerDto): any;
    getcustomer(number: any): any;
    searchcustomer(number: any): any;
    updatecustomer(number: any): any;
    deletecustomer(number: any): any;
    customerExit(id: any): any;
}
