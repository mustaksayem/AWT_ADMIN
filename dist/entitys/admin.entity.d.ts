import { BaseEntity } from "typeorm";
import { ProductEntity } from "./product.entity";
export declare class AdminEntity extends BaseEntity {
    id: number;
    Name: string;
    Email: string;
    Password: string;
    location: string;
    fileName: string;
    productEntity: ProductEntity[];
}
