import { Repository } from 'typeorm';
import { CustomerEntity } from 'src/entitys/customer.entity';
export declare class CustomerService {
    private customerRepo;
    constructor(customerRepo: Repository<CustomerEntity>);
    getCustomerByid(id: any): Promise<CustomerEntity>;
    getallCustomer(): any;
    searchCustomer(id: any): Promise<CustomerEntity>;
}
