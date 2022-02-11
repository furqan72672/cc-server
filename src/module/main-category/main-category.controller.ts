import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MasterCategoryService } from "../master-category/master-category.service";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import {
  MasterCategoryRequestDto,
  MasterCategoryResponseDto,
  MasterCategoryUpdateRequestDto
} from "../../data/dtos/master.category.dto";
import { MainCategoryService } from "./main-category.service";
import {
  MainCategoryRequestDto,
  MainCategoryResponseDto,
  MainCategoryUpdateRequestDto
} from "../../data/dtos/main.category.dto";

@ApiTags("Main Category")
@Controller('main-category')
export class MainCategoryController {

  constructor(private readonly service:MainCategoryService) {
  }



  @ApiOkResponse({ type: [MainCategoryResponseDto], description: "All Main Categories" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get()
  async fetchAll(){
    return this.service.fetch();
  }


  @ApiOkResponse({ type: MainCategoryResponseDto, description: "Main Category with id " })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/:id")
  async fetchOne(@Param("id") id:string){
    return this.service.fetch(id);
  }


  @ApiOkResponse({ type: MainCategoryResponseDto, description: "Main Category with master category id " })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/by-master/:id")
  async fetchByMasterCategoryId(@Param("id") id:string){
    return this.service.fetchByMasterCategoryId(id);
  }



  @ApiCreatedResponse({ type: MainCategoryResponseDto, description: "Main Category Created Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({
    type: MainCategoryRequestDto
  })
  @Post()
  async createNew(@Body() data:any){
    return this.service.create(data);
  }


  @ApiCreatedResponse({ type: MainCategoryResponseDto, description: "Main Category Updated Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @Patch("/:id")
  @ApiBody({type:MainCategoryUpdateRequestDto})
  async updateOne(@Param("id") id:string,@Body() data:any){
    return this.service.update(id,data);
  }


  @ApiOkResponse({ description: "Main Category Deleted successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Delete("/:id")
  async delete(@Param("id") id:string){
    await this.service.delete(id);
  }
}
