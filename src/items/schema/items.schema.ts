import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


//TODO Los Schemas de items 

export type ItemDocument = Items & Document;

@Schema()
export class Items {
  @Prop({require:true})
  email: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const ItemSchema = SchemaFactory.createForClass(Items);