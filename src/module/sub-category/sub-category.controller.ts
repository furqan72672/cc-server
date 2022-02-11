import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MainCategoryService } from "../main-category/main-category.service";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import {
  MainCategoryRequestDto,
  MainCategoryResponseDto,
  MainCategoryUpdateRequestDto
} from "../../data/dtos/main.category.dto";
import { SubCategoryService } from "./sub-category.service";
import {
  SubCategoryRequestDto,
  SubCategoryResponseDto,
  SubCategoryUpdateRequestDto
} from "../../data/dtos/sub.category.dto";

@ApiTags("Sub Categories")
@Controller('sub-category')
export class SubCategoryController {

  constructor(private readonly service:SubCategoryService) {
  }



  @ApiOkResponse({ type: [SubCategoryResponseDto], description: "All Sub Categories" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get()
  async fetchAll(){
    return this.service.fetch();
  }


  @ApiOkResponse({ type: SubCategoryResponseDto, description: "Sub Category with id " })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/:id")
  async fetchOne(@Param("id") id:string){
    return this.service.fetch(id);
  }

  @ApiOkResponse({ type: SubCategoryResponseDto, description: "Sub Category with Main Category  id " })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/by-main/:id")
  async fetchByMainCategoryId(@Param("id") id:string){
    return this.service.fetchByMainCategoryId(id);
  }



  @ApiCreatedResponse({ type: SubCategoryResponseDto, description: "Sub Category Created Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({
    type: SubCategoryRequestDto
  })
  @Post()
  async createNew(@Body() data:any){
    return this.service.create(data);
  }


  @ApiCreatedResponse({ type: SubCategoryResponseDto, description: "Sub Category Updated Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @Patch("/:id")
  @ApiBody({type:SubCategoryUpdateRequestDto})
  async updateOne(@Param("id") id:string,@Body() data:any){
    return this.service.update(id,data);
  }


  @ApiOkResponse({ description: "Sub Category Deleted successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Delete("/:id")
  async delete(@Param("id") id:string){
    await this.service.delete(id);
  }
}
