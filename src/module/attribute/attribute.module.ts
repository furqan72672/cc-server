import { Module } from '@nestjs/common';
import { AttributeController } from './attribute.controller';
import { AttributeService } from './attribute.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Attribute, AttributeSchema } from "../../data/schemas/attribute.schema";

@Module({
  imports:[MongooseModule.forFeature([{name:Attribute.name,schema:AttributeSchema}])],
  controllers: [AttributeController],
  providers: [AttributeService]
})
export class AttributeModule {}
