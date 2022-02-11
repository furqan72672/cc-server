import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Attribute, AttributeDocument } from "../../data/schemas/attribute.schema";

@Injectable()
export class AttributeService {
  constructor(
    @InjectModel(Attribute.name) private readonly model: Model<AttributeDocument>) {
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
