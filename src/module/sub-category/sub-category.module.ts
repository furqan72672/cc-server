import { Module } from '@nestjs/common';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryService } from './sub-category.service';
import { SubCategories, SubCategorySchema } from "../../data/schemas/sub.category.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports:[MongooseModule.forFeature([{name:SubCategories.name,schema:SubCategorySchema}])],
  controllers: [SubCategoryController],
  providers: [SubCategoryService]
})
export class SubCategoryModule {}
