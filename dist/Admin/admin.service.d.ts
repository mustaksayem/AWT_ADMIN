import { Repository } from 'typeorm';
import { AdminDto, CustomerDto } from './admin.dto';
import { AdminEntity } from './admin.entity';
export declare class AdminService {
    private adminRepo;
    constructor(adminRepo: Repository<AdminEntity>);
    insert(user: AdminDto): Promise<AdminDto & AdminEntity>;
    getUserByid(id: any): Promise<AdminEntity>;
    getallUser(): any;
    searchUser(id: any): Promise<AdminEntity>;
    updateUSer(Name: any, location: any, id: any): any;
    deleteUserById(id: any): Promise<import("typeorm").DeleteResult>;
    addcustomer(add: CustomerDto): any;
    getcustomer(number: any): any;
    searchcustomer(number: any): any;
    updatecustomer(number: any): any;
    deletecustomer(number: any): any;
    customerExit(id: any): any;
}
