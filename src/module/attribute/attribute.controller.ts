import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import {
  SubCategoryRequestDto,
  SubCategoryResponseDto,
  SubCategoryUpdateRequestDto
} from "../../data/dtos/sub.category.dto";
import { AttributeService } from "./attribute.service";
import { AttributeRequestDto, AttributeResponseDto, AttributeUpdateRequestDto } from "../../data/dtos/attribute.dto";

@ApiTags("Attribute")
@Controller('attribute')
export class AttributeController {

  constructor(private readonly service:AttributeService) {
  }



  @ApiOkResponse({ type: [AttributeResponseDto], description: "All Attribute" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get()
  async fetchAll(){
    return this.service.fetch();
  }


  @ApiOkResponse({ type: AttributeResponseDto, description: "Attribute with id " })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/:id")
  async fetchOne(@Param("id") id:string){
    return this.service.fetch(id);
  }



  @ApiCreatedResponse({ type: AttributeResponseDto, description: "Attribute Created Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({
    type: AttributeRequestDto
  })
  @Post()
  async createNew(@Body() data:any){
    return this.service.create(data);
  }


  @ApiCreatedResponse({ type: AttributeResponseDto, description: "Attribute Updated Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @Patch("/:id")
  @ApiBody({type:AttributeUpdateRequestDto})
  async updateOne(@Param("id") id:string,@Body() data:any){
    return this.service.update(id,data);
  }


  @ApiOkResponse({ description: "Attribute Deleted successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Delete("/:id")
  async delete(@Param("id") id:string){
    await this.service.delete(id);
  }
}
