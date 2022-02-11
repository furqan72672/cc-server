import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { MainCategories, MainCategoryDocument } from "../../data/schemas/main.catergory.schema";
import { Model } from "mongoose";
import { SubCategories, SubCategoryDocument } from "../../data/schemas/sub.category.schema";

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectModel(SubCategories.name) private readonly model: Model<SubCategoryDocument>) {
  }

  async fetch(id?: string) {
    if (id == null) {
      return this.model.find()
        .populate("master_category")
        .populate("main_category")
        .exec();
    }
    return this.model.findOne({ _id: id })
      .populate("master_category")
      .populate("main_category")
      .exec();
  }
  async fetchByMainCategoryId(id: string) {

    return this.model.find({ main_category: id })
      .populate("master_category",{name:1})
      .populate("main_category",{name:1})
      .exec();
  }

  async create(data: any) {
    return this.model.create(data);
  }

  update(id: string, data: any) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
      .populate("master_category")
      .populate("main_category")
      .exec();
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
