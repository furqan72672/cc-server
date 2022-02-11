import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DbModule } from "./common/db/db.module";
import { MasterCategoryModule } from "./module/master-category/master-category.module";
import { ImageUtils } from "./common/lib/image-utils";
import { MulterModule } from "@nestjs/platform-express";
import { MainCategoryModule } from "./module/main-category/main-category.module";
import { SubCategoryModule } from "./module/sub-category/sub-category.module";
import { AttributeModule } from "./module/attribute/attribute.module";
import { ProductModule } from "./module/product/product.module";
import { MuqeetModule } from "./module/muqeet/muqeet.module";

@Module({
  imports: [
    DbModule,
    AttributeModule,
    ProductModule,MuqeetModule,
    MainCategoryModule,
    SubCategoryModule,
    MasterCategoryModule,
    MulterModule.register(
    {
      dest: ImageUtils.imagePath
    }
  )],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
