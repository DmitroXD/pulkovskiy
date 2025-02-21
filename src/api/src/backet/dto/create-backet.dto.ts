import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateBacketDto {
  @ApiProperty({
    title: 'UserID',
    example: 'UserId from Telegram',
  })
  @IsNumber()
  readonly userId: number;
}
