import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  group: string;

  @Column({
    unique: true,
    length: 256,
  })
  name: string;

  @Column({
    nullable: true,
    length: 1024,
  })
  description: string;

  @Column()
  price: number;

  @Column({
    nullable: true,
  })
  photo: string;
}
