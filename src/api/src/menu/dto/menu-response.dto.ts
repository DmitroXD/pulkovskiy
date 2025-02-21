import { ApiProperty } from '@nestjs/swagger';
import { Menu } from '../entity/menu.entity';

export class MenuResponseDto {
  constructor(payload: Partial<Menu>) {
    Object.assign(this, payload);
  }

  @ApiProperty({ title: 'Id' })
  id: number;

  @ApiProperty({ title: 'Категория товара' })
  category: string;

  @ApiProperty({ title: 'Группа товара' })
  group: string;

  @ApiProperty({ title: 'Название позиции' })
  name: string;

  @ApiProperty({ title: 'Описание товара' })
  description: string;

  @ApiProperty({ title: 'Цена товара' })
  price: number;

  @ApiProperty({ title: 'Товара товара (Optional)' })
  photo: string | undefined;
}
