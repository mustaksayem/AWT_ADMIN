import {  IsNotEmpty, IsNumber, IsString, MaxLength, MinLength} from "class-validator";

export class AdminDto{
   // @IsString()
    @IsNotEmpty({message:"id not epmty enter your id"})
    @IsNumber()
    id:number;

    @IsString({message:"name must be string"})
    @IsNotEmpty({message:"enter your name"})
    @MaxLength(10,{message:"nmae max length is 10"})
    @MinLength(3,{message:"name Min length is 3"})
    Name:string;

    @IsNotEmpty({message:"Enter your Locatoon"})
    @IsString({message:"Location must be String"})
    location:string;

}

export class CustomerDto{
    @IsNotEmpty({message:"Enter your Locatoon"})
    @IsString({message:"Location must be String"})
    Name:string;
    @IsNotEmpty({message:"Enter your naem"})
    @IsNumber()
    number:string

}