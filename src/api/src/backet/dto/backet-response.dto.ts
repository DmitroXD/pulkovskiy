import { ApiProperty } from '@nestjs/swagger';
import { Backet } from '../entity/backet.entity';
import { Menu } from '../../menu/entity/menu.entity';

export class BacketResponseDto {
  constructor(payload: Partial<Backet>) {
    Object.assign(this, payload);
  }

  @ApiProperty({ title: 'Id' })
  readonly id: number;

  @ApiProperty({ title: 'UserID' })
  readonly userId: number;

  @ApiProperty({ title: 'Current backet' })
  readonly menus: Menu[];
}
