/// <reference types="multer" />
import { AdminDto } from '../DOTs/admin.dto';
import { AdminService } from '../Services/admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getProfile(session: any): any;
    insert(admindto: AdminDto, file: Express.Multer.File): Promise<AdminDto & import("../entitys/admin.entity").AdminEntity>;
    signin(session: any, admindto: AdminDto): {
        message: string;
    };
}
