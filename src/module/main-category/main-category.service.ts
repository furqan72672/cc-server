import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MainCategories, MainCategoryDocument } from "../../data/schemas/main.catergory.schema";

@Injectable()
export class MainCategoryService {
  constructor(
    @InjectModel(MainCategories.name) private readonly model: Model<MainCategoryDocument>) {
  }

  async fetch(id?: string) {
    if (id == null) {
      return this.model.find()
        .populate("master_category")
        .exec();
    }
    return this.model.findOne({ _id: id })
      .populate("master_category")
      .exec();
  }
  async fetchByMasterCategoryId(id: string) {

    return this.model.find({ master_category: id })
      .populate("master_category")
      .exec();
  }

  async create(data: any) {
    return this.model.create(data);
  }

  update(id: string, data: any) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
      .populate("master_category")
      .exec();
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
