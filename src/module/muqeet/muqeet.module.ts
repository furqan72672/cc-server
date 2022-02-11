import { Module } from "@nestjs/common";
import { MuqeetController } from "./muqeet.controller";
import { MuqeetService } from "./muqeet.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Muqeet, MuqeetSchema } from "../../data/schemas/muqeet.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Muqeet.name, schema: MuqeetSchema }])],
  controllers: [MuqeetController],
  providers: [MuqeetService]
})
export class MuqeetModule {
}
