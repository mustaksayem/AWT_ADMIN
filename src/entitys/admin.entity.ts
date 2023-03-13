import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity("Admin_table")
export class AdminEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Name: string
    @Column()
    Email: string
    @Column()
    Password: string
    @Column()
    location: string
    @Column({ nullable: true })
    fileName: string
    //hello
    @OneToMany(() => ProductEntity, (productEntity) => productEntity.Admin)
    productEntity: ProductEntity[]
}


