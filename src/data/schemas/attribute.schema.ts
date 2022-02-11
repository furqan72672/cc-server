import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type AttributeDocument = Attribute & Document;

@Schema({ timestamps: true })
export class Attribute {
  @Prop()
  name: string;

  @Prop()
  values: [string];

}

export const AttributeSchema = SchemaFactory.createForClass(Attribute);
