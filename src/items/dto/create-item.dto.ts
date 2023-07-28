import { IsNotEmpty } from "class-validator";

export class CreateItemDto {

@IsNotEmpty()

    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    price: number;
    @IsNotEmpty()
    description: string;


}
