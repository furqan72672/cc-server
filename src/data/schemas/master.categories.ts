


import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FileSchema } from "./file.schema";



export type MasterCategoryDocument = MasterCategories & Document;

@Schema({ timestamps: true })
export class MasterCategories {
  @Prop()
  name: string;

  @Prop()
  direct: boolean;

  @Prop()
  active: boolean;

  @Prop()
  image: FileSchema;

}

export const MasterCategorySchema = SchemaFactory.createForClass(MasterCategories);
