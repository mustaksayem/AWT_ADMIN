import { BaseEntity } from "typeorm";
import { AdminEntity } from "./admin.entity";
export declare class ProductEntity extends BaseEntity {
    id: number;
    Name: string;
    Price: number;
    Category: string;
    Description: string;
    Image: string;
    Admin: AdminEntity;
}
