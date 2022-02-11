import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Attribute, AttributeDocument } from "../../data/schemas/attribute.schema";
import { Model } from "mongoose";
import { Muqeet, MuqeetDocument } from "../../data/schemas/muqeet.schema";

@Injectable()
export class MuqeetService {
  constructor(
    @InjectModel(Muqeet.name) private readonly model: Model<MuqeetDocument>) {
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
