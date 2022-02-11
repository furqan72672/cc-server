import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { MasterCategories } from "./master.categories";


export type MainCategoryDocument = MainCategories & Document;

@Schema({ timestamps: true })
export class MainCategories {
  @Prop()
  name: string;

  @Prop()
  active: boolean;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:MasterCategories.name})
  master_category: string;

}

export const MainCategorySchema = SchemaFactory.createForClass(MainCategories);
