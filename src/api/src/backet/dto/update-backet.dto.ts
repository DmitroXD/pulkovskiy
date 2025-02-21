import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBacketDto } from './create-backet.dto';
import { IsNumber } from 'class-validator';

export class UpdateBacketDto extends PartialType(CreateBacketDto) {
  @ApiProperty({
    title: 'MenuID',
    example: 'ID positions from menu',
  })
  @IsNumber()
  readonly menuId: number;
}
