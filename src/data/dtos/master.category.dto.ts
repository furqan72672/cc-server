import { FileDto } from "./file.dto";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";


export class MasterCategoryRequestDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsBoolean()
  @ApiProperty()
  direct: boolean;

  @IsBoolean()
  @ApiProperty()
  active: boolean;

  @ApiProperty({type:FileDto})
  image: FileDto;
}


export class MasterCategoryUpdateRequestDto extends PartialType(MasterCategoryRequestDto){
}


export class MasterCategoryResponseDto extends PartialType(MasterCategoryRequestDto){
  @ApiProperty()
  _id: string;
}


