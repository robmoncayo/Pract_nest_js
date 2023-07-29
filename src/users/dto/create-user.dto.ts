import { IsNotEmpty } from "class-validator";

export class CreateUserDto {

@IsNotEmpty()

    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    price: number;
    @IsNotEmpty()
    description: string;


}
