import { BaseEntity } from "typeorm";
export declare class ProductEntity extends BaseEntity {
    id: number;
    Name: string;
    Price: number;
    Category: string;
    Description: string;
    Image: string;
}
