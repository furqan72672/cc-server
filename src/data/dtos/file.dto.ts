import { ApiProperty } from "@nestjs/swagger";


export class FileDto {


  @ApiProperty()
  name: string;

  @ApiProperty()
  path: string;

}


export class SaveFileDTO {
  @ApiProperty({ required: true, type: 'string', format: 'binary' })
  image: FileDto;
}

export class SaveVideoFileDTO {
  @ApiProperty({ required: true, type: 'string', format: 'binary' })
  video: FileDto;
}



export class SaveMultipleFileDTO {
  @ApiProperty({ required: true, type: 'string', format: 'binary' })
  image: FileDto;

}

