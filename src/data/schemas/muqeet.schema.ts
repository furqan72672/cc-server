import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { FileSchema } from "./file.schema";


export type MuqeetDocument = Muqeet & Document;

@Schema({ timestamps: true })
export class Muqeet {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  type:string;

  @Prop()
  stock:string;

  @Prop()
  status:string;

  @Prop()
  image:[FileSchema];

}

export const MuqeetSchema = SchemaFactory.createForClass(Muqeet);
