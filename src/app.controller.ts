import { Controller, Delete, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam, ApiTags
} from "@nestjs/swagger";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { ImageUtils } from "./common/lib/image-utils";
import { Http500 } from "./common/lib/Http500";
import { FileDto, SaveFileDTO, SaveMultipleFileDTO, SaveVideoFileDTO } from "./data/dtos/file.dto";


@ApiTags("Main")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }


  @ApiCreatedResponse({ type: FileDto, description: "Image Saved Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({ type: SaveFileDTO })
  @ApiConsumes("multipart/form-data")
  @Post("save-image")
  @UseInterceptors(FileInterceptor("image"))
  saveImage(@UploadedFile() file): any {
    return { name: file.filename, path: file.path };
  }


  @ApiOkResponse({ description: "Image deleted Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiParam({
    name: "name",
    type: "String",
    required: true
  })
  @Delete("delete-image/:name")
  deleteImage(@Param("name") name: string): any {
    const imagePath = ImageUtils.imagePath + "/" + name;
    try {
      return ImageUtils.deleteImages(imagePath, true);
    } catch (error) {
      Http500.throw(error);
    }
  }

  @ApiCreatedResponse({ type: FileDto, description: "Video Saved Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({ type: SaveVideoFileDTO })
  @ApiConsumes("multipart/form-data")
  @Post("save-video")
  @UseInterceptors(FileInterceptor("video"))
  saveVideo(@UploadedFile() file): any {
    return { name: file.filename, path: file.path };
  }

  @ApiOkResponse({ description: "Video deleted Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiParam({
    name: "name",
    type: "String",
    required: true
  })
  @Delete("delete-video/:name")
  deleteVideo(@Param("name") name: string): any {
    const imagePath = ImageUtils.imagePath + "/" + name;
    try {
      return ImageUtils.deleteImages(imagePath, true);
    } catch (error) {
      Http500.throw(error);
    }
  }


  @ApiCreatedResponse({ type: [FileDto], description: "Images Saved Successfully" })
  @ApiInternalServerErrorResponse({ description: "Unexpected Error" })
  @ApiBody({ type: SaveMultipleFileDTO })
  @ApiConsumes("multipart/form-data")
  @Post("save-images")
  @UseInterceptors(FilesInterceptor("image"))
  saveMultipleImage(@UploadedFiles() files): any {
    let result=[];
    for (let file of files){
      result.push({ name: file.filename, path: file.path })
    }
    console.log(result);
    return result;
  }



  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
