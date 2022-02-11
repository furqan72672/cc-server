import { Prop } from "@nestjs/mongoose";
import { FileSchema } from "../schemas/file.schema";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { MasterCategoryResponseDto } from "./master.category.dto";
import { LocalMainCategoryResponses } from "./main.category.dto";
import {  SubCategoryResponseForProductDto } from "./sub.category.dto";
import { AttributeResponseDto } from "./attribute.dto";
import { FileDto } from "./file.dto";
import { IS_MONGO_ID, IsBoolean, IsMongoId, IsNumber, IsString } from "class-validator";

export class SelectedValues {
  @IsString()
  @ApiProperty()
  name:string;

  @IsNumber()
  @ApiProperty()
  price:number;

  @IsNumber()
  @ApiProperty()
  stock:number;

  @IsNumber()
  @ApiProperty()
  min_stock:number;

  @ApiProperty({type:[FileDto]})
  images: [FileDto];

}

export class VariantDto {
  @IsMongoId()
  @ApiProperty()
  attribute: string;

  @ApiProperty({type:[SelectedValues]})
  selected_values: [SelectedValues];
}


export class ProductRequestDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsMongoId()
  @ApiProperty({type:String})
  master_category: string;

  @IsMongoId()
  @ApiProperty({type:String})
  main_category:string;

  @IsMongoId()
  @ApiProperty({type:String})
  sub_category:string;

  @IsString()
  @ApiProperty()
  description:string;

  @IsNumber()
  @ApiProperty()
  items_in_stock:number;

  @IsNumber()
  @ApiProperty()
  minimum_stock:number;

  @IsNumber()
  @ApiProperty()
  warranty_months:number;

  @IsNumber()
  @ApiProperty()
  price:number;

  @IsNumber()
  @ApiProperty()
  admin_commission:number;

  @ApiProperty({type:FileDto})
  image:FileDto;

  @ApiProperty({type:FileDto})
  video:FileDto;

  //booleans
  @IsBoolean()
  @ApiProperty()
  active:boolean;

  @IsBoolean()
  @ApiProperty({default:false})
  hide_warranty:boolean;

  @IsBoolean()
  @ApiProperty({default:false})
  featured:boolean;

  @IsBoolean()
  @ApiProperty({default:false})
  gift_deals:boolean;

  @IsBoolean()
  @ApiProperty({default:false})
  out_of_stock:boolean;

  @ApiProperty({type:[VariantDto]})
  variant : [VariantDto];

}



export class ProductUpdateRequestDto extends PartialType(ProductRequestDto){
}



export class SelectedValuesResponse {
  @ApiProperty()
  name:string;

  @ApiProperty()
  price:number;

  @ApiProperty()
  stock:number;

  @ApiProperty()
  min_stock:number;

  @ApiProperty({type:[FileDto]})
  images: [FileSchema];

}

export class VariantDtoResponse {
  @ApiProperty({type:AttributeResponseDto})
  attribute: AttributeResponseDto;

  @ApiProperty({type:[SelectedValuesResponse]})
  selected_values: [SelectedValuesResponse];
}


export class ProductResponseDto{
  @ApiProperty()
  _id:string;

  @ApiProperty()
  name: string;

  @ApiProperty({type:MasterCategoryResponseDto})
  master_category: MasterCategoryResponseDto;

  @ApiProperty({type:LocalMainCategoryResponses})
  main_category:LocalMainCategoryResponses;

  @ApiProperty({type:SubCategoryResponseForProductDto})
  sub_category:SubCategoryResponseForProductDto;

  @ApiProperty()
  description:string;

  @ApiProperty()
  items_in_stock:number;

  @ApiProperty()
  minimum_stock:number;

  @Prop()
  warranty_months:number;

  @ApiProperty()
  price:number;

  @ApiProperty()
  admin_commission:number;

  @ApiProperty()
  image:FileDto;

  @ApiProperty()
  video:FileDto;

  //booleans
  @ApiProperty()
  active:boolean;

  @ApiProperty()
  hide_warranty:boolean;

  @ApiProperty()
  featured:boolean;

  @ApiProperty()
  gift_deals:boolean;

  @ApiProperty()
  out_of_stock:boolean;

  @ApiProperty({type:[VariantDtoResponse]})
  variant : [VariantDtoResponse];
}

