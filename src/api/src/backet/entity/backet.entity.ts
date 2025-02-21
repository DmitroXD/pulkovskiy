import {
  Index,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Menu } from '../../menu/entity/menu.entity';

@Entity()
export class Backet {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  userId: number;

  @ManyToMany(() => Menu)
  @JoinTable()
  menus: Menu[];
}
