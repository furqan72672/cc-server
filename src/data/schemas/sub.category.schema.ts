import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { MasterCategories } from "./master.categories";
import * as mongoose from "mongoose";
import { MainCategories } from "./main.catergory.schema";

export type SubCategoryDocument = SubCategories & Document;

@Schema({ timestamps: true })
export class SubCategories {
  @Prop()
  name: string;

  @Prop()
  active: boolean;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:MasterCategories.name})
  master_category: string;

  @Prop([{type:mongoose.Schema.Types.ObjectId,ref:MainCategories.name}])
  main_category: [ string ];

}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategories);
