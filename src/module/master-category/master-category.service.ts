import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MasterCategories, MasterCategoryDocument } from "../../data/schemas/master.categories";
import { Model } from "mongoose";

@Injectable()
export class MasterCategoryService {
  constructor(
    @InjectModel(MasterCategories.name) private readonly model: Model<MasterCategoryDocument>) {
  }

  async fetch(id?: string) {
    if (id == null) {
      return this.model.find().exec();
    }
    return this.model.findOne({ _id: id }).exec();
  }

  async create(data: any) {
    return this.model.create(data);
  }

  update(id: string, data: any) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
