import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AttributeService } from "../attribute/attribute.service";
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AttributeRequestDto, AttributeResponseDto, AttributeUpdateRequestDto } from "../../data/dtos/attribute.dto";
import { MuqeetService } from "./muqeet.service";
import { MuqeetRequestDto, MuqeetResponseDto } from "../../data/dtos/muqeet.dto";


@ApiTags("Muqeet ")
@Controller('muqeet')
export class MuqeetController {

  constructor(private readonly service:MuqeetService) {
  }



  @ApiOkResponse({ type: [MuqeetResponseDto], description: "All Muqeet" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get()
  async fetchAll(){
    return this.service.fetch();
  }


  @ApiOkResponse({ type: MuqeetResponseDto, description: "Muqeet with id " })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Get("/:id")
  async fetchOne(@Param("id") id:string){
    return this.service.fetch(id);
  }



  @ApiCreatedResponse({ type: MuqeetResponseDto, description: "Muqeet Created Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({
    type: MuqeetRequestDto
  })
  @Post()
  async createNew(@Body() data:any){
    return this.service.create(data);
  }


  @ApiCreatedResponse({ type: MuqeetResponseDto, description: "Muqeet Updated Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @Patch("/:id")
  @ApiBody({type:MuqeetRequestDto})
  async updateOne(@Param("id") id:string,@Body() data:any){
    return this.service.update(id,data);
  }


  @ApiOkResponse({ description: "Muqeet Deleted successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Errors" })
  @Delete("/:id")
  async delete(@Param("id") id:string){
    await this.service.delete(id);
  }
}

