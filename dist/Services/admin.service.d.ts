import { Repository } from 'typeorm';
import { AdminDto } from '../DOTs/admin.dto';
import { AdminEntity } from '../entitys/admin.entity';
export declare class AdminService {
    private adminRepo;
    constructor(adminRepo: Repository<AdminEntity>);
    Profile(): string;
    AdminSingUp(adminDto: AdminDto): Promise<AdminDto & AdminEntity>;
    AdminSignIn(admindto: AdminDto): Promise<number>;
}
