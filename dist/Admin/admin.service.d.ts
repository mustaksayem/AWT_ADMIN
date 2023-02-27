import { AdminDto, CustomerDto } from './admin.dto';
export declare class AdminService {
    adduser(add: AdminDto): any;
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
