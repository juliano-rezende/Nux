import { type Type as NestType } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

class PaginationMeta {
  @ApiProperty()
  @Expose()
  currentPage: number;

  @ApiProperty()
  @Expose()
  itemCount: number;

  @ApiProperty()
  @Expose()
  itemsPerPage: number;

  @ApiProperty()
  @Expose()
  totalItems: number;

  @ApiProperty()
  @Expose()
  totalPages: number;
}

export class PaginationResponse<T> {
  @Exclude()
  private readonly type: NestType<T>;

  @ApiProperty()
  @Expose()
  items: T[];

  @ApiProperty()
  @Expose()
  @Type(() => PaginationMeta)
  meta: PaginationMeta;

  constructor(type: NestType<T>) {
    this.type = type;
  }
}
