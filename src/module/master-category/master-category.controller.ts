import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MasterCategoryService } from "./master-category.service";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import {
  MasterCategoryRequestDto,
  MasterCategoryResponseDto,
  MasterCategoryUpdateRequestDto
} from "../../data/dtos/master.category.dto";


@ApiTags("Master Category")
@Controller('master-category')
export class MasterCategoryController {
  constructor(private readonly service:MasterCategoryService) {
  }



  @ApiOkResponse({ type: [MasterCategoryResponseDto], description: "All Master Categories" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get()
  async fetchAll(){
    return this.service.fetch();
  }


  @ApiOkResponse({ type: MasterCategoryResponseDto, description: "Master Category with id " })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/:id")
  async fetchOne(@Param("id") id:string){
    return this.service.fetch(id);
  }



  @ApiCreatedResponse({ type: MasterCategoryResponseDto, description: "Master Category Created Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({
    type: MasterCategoryRequestDto
  })
  @Post()
  async createNew(@Body() data:any){
    return this.service.create(data);
  }


  @ApiCreatedResponse({ type: MasterCategoryResponseDto, description: "Master Category Updated Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @Patch("/:id")
  @ApiBody({type:MasterCategoryUpdateRequestDto})
  async updateOne(@Param("id") id:string,@Body() data:any){
    return this.service.update(id,data);
  }


  @ApiOkResponse({ description: "Master Category Deleted successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Delete("/:id")
  async delete(@Param("id") id:string){
    await this.service.delete(id);
  }
}
