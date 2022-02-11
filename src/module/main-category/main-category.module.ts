import { Module } from '@nestjs/common';
import { MainCategoryController } from './main-category.controller';
import { MainCategoryService } from './main-category.service';
import { MongooseModule } from "@nestjs/mongoose";
import { MainCategories, MainCategorySchema } from "../../data/schemas/main.catergory.schema";

@Module({
  imports:[MongooseModule.forFeature([{name:MainCategories.name,schema:MainCategorySchema}])],
  controllers: [MainCategoryController],
  providers: [MainCategoryService]
})
export class MainCategoryModule {}
