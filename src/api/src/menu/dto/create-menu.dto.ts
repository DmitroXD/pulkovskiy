import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateMenuDto {
  @ApiProperty({
    title: 'Категория',
    example:
      'Кулинария/Десерты/Фермерские продукты/Деликатесы/Хиты/Полуфабрикаты',
  })
  @IsString()
  readonly category: string;

  @ApiProperty({
    title: 'Группа',
    example:
      'Горячие блюда/Салаты и закуски/Торты и пирожные/Колбасы и сосиски/Сыр/Молоко',
  })
  @IsString()
  readonly group: string;

  @ApiProperty({
    title: 'Название позиции',
    example: 'Фуагра',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    title: 'Описание',
    example: 'Какое-то описание',
  })
  @IsString()
  readonly description: string | undefined;

  @ApiProperty({
    title: 'Описание курса',
    example: 'Ну тут какое то описание',
  })
  @IsNumber()
  readonly price: number;

  @ApiProperty({
    title: 'Ссылка на фото',
    example: 'https://google.com/...',
  })
  @IsNumber()
  readonly photo: string;
}
