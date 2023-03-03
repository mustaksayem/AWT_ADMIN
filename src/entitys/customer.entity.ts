import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Customers")
export class CustomerEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    Name:string
    @Column()
    Email:string

    @Column()
    Password:string

    @Column()
    Number:string
    @Column()
    Location:string


}


