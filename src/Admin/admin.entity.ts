import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Admin_table")
export class AdminEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    Name:string
    @Column()
    location:string


}


