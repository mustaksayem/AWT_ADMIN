import { Repository } from 'typeorm';
import { AdminDto } from '../DOTs/admin.dto';
import { AdminEntity } from '../entitys/admin.entity';
import { MailerService } from '@nestjs-modules/mailer';
export declare class AdminService {
    private adminRepo;
    private mailerService;
    constructor(adminRepo: Repository<AdminEntity>, mailerService: MailerService);
    Profile(): string;
    AdminSingUp(adminDto: AdminDto): Promise<AdminDto & AdminEntity>;
    AdminSignIn(admindto: AdminDto): Promise<number>;
    update(adminDto: AdminDto, id: any): Promise<import("typeorm").UpdateResult>;
    sendEmail(mydata: any, file: any): Promise<any>;
    getAdminById(id: any): Promise<AdminEntity>;
    DeleteAdmin(id: any): Promise<import("typeorm").DeleteResult>;
}
