import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { MenuService } from './menu.service';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuResponseDto } from './dto/menu-response.dto';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({ summary: 'Создание позиции' })
  @Post()
  async create(@Body() createMenoDto: CreateMenuDto) {
    const menu = await this.menuService.create(createMenoDto);
    return new MenuResponseDto(menu);
  }

  @ApiOperation({ summary: 'Получение всех позиций' })
  @Get()
  async findAll() {
    const menus = await this.menuService.findAll();
    return menus.map((item) => new MenuResponseDto(item));
  }

  @ApiOperation({ summary: 'Получение позиции меню по id' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const found = await this.menuService.findOne(+id);
    return new MenuResponseDto(found);
  }

  @ApiOperation({ summary: 'Обновление позиции меню по id' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    const updated = await this.menuService.update(+id, updateMenuDto);
    return new MenuResponseDto(updated);
  }

  @ApiOperation({ summary: 'Удаление позиции меню по id' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removed = await this.menuService.remove(+id);
    return new MenuResponseDto(removed);
  }
}
