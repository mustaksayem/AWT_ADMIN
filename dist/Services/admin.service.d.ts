import { Repository } from 'typeorm';
import { AdminDto } from '../DOTs/admin.dto';
import { AdminEntity } from '../entitys/admin.entity';
export declare class AdminService {
    private adminRepo;
    constructor(adminRepo: Repository<AdminEntity>);
    Profile(): string;
    insert(adminDto: AdminDto): Promise<AdminDto & AdminEntity>;
    signin(admindto: any): Promise<string | 0>;
}
