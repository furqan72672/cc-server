import { Prop } from "@nestjs/mongoose";
import { FileSchema } from "../schemas/file.schema";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { FileDto } from "./file.dto";


export class MuqeetRequestDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type:string;

  @ApiProperty()
  stock:string;

  @ApiProperty()
  status:string;

  @ApiProperty({type:[FileDto]})
  image:[FileDto];
}

export class MuqeetResponseDto extends  PartialType(MuqeetRequestDto){
  @ApiProperty()
  _id:string;
}
