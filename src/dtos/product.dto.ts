import {
    IsUUID,
    IsString,
    IsOptional,
    IsInt,
    IsNumber,
    Min,
    MaxLength
} from 'class-validator';

import { OmitType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { PhotoDTO } from './photo.dto';

export class ProductDTO {

    @IsUUID()
    id: string;

    @IsString()
    @MaxLength(150)
    name: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    description: string | null;

    @Type(() => Number)
    @IsInt()
    @Min(0)
    available: number;

    @Type(() => Number)
    @IsNumber()
    @Min(1)
    price: number;
}

export class CreateProductDTO extends OmitType(ProductDTO, ['id']) { }

export class DeletedProductDTO {
    deletedProduct: CompleteProductDTO;
}

export class CompleteProductDTO extends ProductDTO {
    photos: PhotoDTO[]
}

export class GetProductsDTO {
    products: CompleteProductDTO[];
    resultsFound: number;
}
