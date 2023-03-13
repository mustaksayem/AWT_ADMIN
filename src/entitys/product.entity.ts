import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AdminEntity } from "./admin.entity";

@Entity("Transportation")
export class ProductEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    Name:string
    @Column()
    Price:number

    @Column()
    Category:string

    @Column()
    Description:string
    @Column({ nullable: true })
    Image:string

    @ManyToOne(() => AdminEntity, (Admin) => Admin.productEntity)
     Admin: AdminEntity
    

}


