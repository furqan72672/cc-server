import { Module } from '@nestjs/common';
import { MasterCategoryController } from './master-category.controller';
import { MasterCategoryService } from './master-category.service';
import { MongooseModule } from "@nestjs/mongoose";
import { MasterCategories, MasterCategorySchema } from "../../data/schemas/master.categories";

@Module({
  imports:[MongooseModule.forFeature([{name:MasterCategories.name,schema:MasterCategorySchema}])],
  controllers: [MasterCategoryController],
  providers: [MasterCategoryService]
})
export class MasterCategoryModule {}
