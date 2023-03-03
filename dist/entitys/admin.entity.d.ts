import { BaseEntity } from "typeorm";
export declare class AdminEntity extends BaseEntity {
    id: number;
    Name: string;
    Email: string;
    Password: string;
    location: string;
    fileName: string;
}
