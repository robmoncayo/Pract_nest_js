import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


//TODO Los Schemas de items 


export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export type UsersDocument = User & Document;


export const UserSchema = SchemaFactory.createForClass(User);