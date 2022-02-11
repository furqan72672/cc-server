import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";


export class AttributeRequestDto {

  @IsString()
  @ApiProperty()
  name: string;

  @IsArray({each:true})
  @ApiProperty({type:[String]})
  values:  [string];
}

export class AttributeResponseDto extends PartialType(AttributeRequestDto) {
  @ApiProperty()
  _id: string;
}

export class AttributeUpdateRequestDto extends PartialType(AttributeRequestDto) {
}

