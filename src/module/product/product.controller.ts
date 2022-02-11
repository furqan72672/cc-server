import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { SubCategoryService } from "../sub-category/sub-category.service";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import {
  SubCategoryRequestDto,
  SubCategoryResponseDto,
  SubCategoryUpdateRequestDto
} from "../../data/dtos/sub.category.dto";
import { ProductService } from "./product.service";
import { ProductRequestDto, ProductResponseDto, ProductUpdateRequestDto } from "../../data/dtos/product.dto";

@ApiTags("Products")
@Controller('product')
export class ProductController {

  constructor(private readonly service:ProductService) {
  }



  @ApiOkResponse({ type: [ProductResponseDto], description: "All Products" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get()
  async fetchAll(){
    return this.service.fetch();
  }


  @ApiOkResponse({ type: [ProductResponseDto], description: "Search By Products name" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/search/:name")
  async search(@Param("name")name:string){
    return this.service.search(name);
  }





  @ApiOkResponse({ type: ProductResponseDto, description: "Product with id " })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/:id")
  async fetchOne(@Param("id") id:string){
    return this.service.fetch(id);
  }



  @ApiCreatedResponse({ type: ProductResponseDto, description: "Product Created Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({
    type: ProductRequestDto
  })
  @Post()
  async createNew(@Body() data:any){
    return this.service.create(data);
  }


  @ApiCreatedResponse({ type: ProductResponseDto, description: "Product Updated Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @Patch("/:id")
  @ApiBody({type:ProductUpdateRequestDto})
  async updateOne(@Param("id") id:string,@Body() data:any){
    return this.service.update(id,data);
  }


  @ApiOkResponse({ description: "Product Deleted successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Delete("/:id")
  async delete(@Param("id") id:string){
    await this.service.delete(id);
  }
}
