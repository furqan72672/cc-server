import { ApiProperty, PartialType } from "@nestjs/swagger";
import { MasterCategoryResponseDto } from "./master.category.dto";
import { IsBoolean, IsMongoId, IsString } from "class-validator";


export class MainCategoryRequestDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsBoolean()
  @ApiProperty()
  active: boolean;

  @IsMongoId()
  @ApiProperty()
  master_category: string;
}

export class MainCategoryUpdateRequestDto extends PartialType(MainCategoryRequestDto){
}

export class MainCategoryResponseDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  master_category: MasterCategoryResponseDto;
}

export class LocalMainCategoryResponses {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  master_category: string;
}

