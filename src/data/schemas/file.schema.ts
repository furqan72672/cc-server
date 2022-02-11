import { Prop, Schema } from "@nestjs/mongoose";


@Schema({_id: false})
export class FileSchema {
  @Prop()
  name: String

  @Prop()
  path: String
}
