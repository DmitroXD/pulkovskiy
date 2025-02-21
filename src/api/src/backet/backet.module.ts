import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Backet } from './entity/backet.entity';
import { BacketController } from './backet.controller';
import { BacketService } from './backet.service';
import { MenuModule } from '../menu/menu.module';

@Module({
  imports: [TypeOrmModule.forFeature([Backet]), MenuModule],
  controllers: [BacketController],
  providers: [BacketService],
  exports: [BacketService, TypeOrmModule.forFeature([Backet])],
})
export class BacketModule {}
