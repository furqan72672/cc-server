import { ApiProperty, PartialType } from "@nestjs/swagger";
import { MasterCategoryResponseDto } from "./master.category.dto";
import { LocalMainCategoryResponses, MainCategoryResponseDto } from "./main.category.dto";
import { IsArray, IsBoolean, IsString } from "class-validator";


export class SubCategoryResponseDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  master_category: MasterCategoryResponseDto;

  @ApiProperty({ type: [LocalMainCategoryResponses]})
  main_category: [LocalMainCategoryResponses];
}

export class SubCategoryResponseForProductDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  master_category: string;

  @ApiProperty({ type: [String]})
  main_category: [string];
}



export class SubCategoryRequestDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsBoolean()
  @ApiProperty()
  active: boolean;

  @IsString()
  @ApiProperty()
  master_category: string;

  @IsArray({each:true})
  @ApiProperty()
  main_category: [string];
}

export class SubCategoryUpdateRequestDto extends PartialType(SubCategoryRequestDto){

}
