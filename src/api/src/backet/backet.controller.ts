import { Controller, Get, Body, Param, Delete, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { BacketService } from './backet.service';
import { CreateBacketDto } from './dto/create-backet.dto';
import { BacketResponseDto } from './dto/backet-response.dto';
import { UpdateBacketDto } from './dto/update-backet.dto';

@Controller('backet')
export class BacketController {
  constructor(private readonly backetService: BacketService) {}

  @ApiOperation({ summary: 'Создание пустой корзины' })
  @Post()
  async create(@Body() createBacketDto: CreateBacketDto) {
    const menu = await this.backetService.create(createBacketDto);
    return new BacketResponseDto(menu);
  }

  @ApiOperation({ summary: 'Получение всех корзин покупателей' })
  @Get()
  async findAll() {
    const menus = await this.backetService.findAll();
    return menus.map((item) => new BacketResponseDto(item));
  }

  @ApiOperation({ summary: 'Получение корзины покупателя по id' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const found = await this.backetService.findOne(+id);
    return new BacketResponseDto(found);
  }

  @ApiOperation({ summary: 'Добавить позицию в корзину покупателя по id' })
  @Post('/push/:id')
  async addMenu(
    @Param('id') id: string,
    @Body() updateBacketDto: UpdateBacketDto,
  ) {
    const updated = await this.backetService.addMenu(+id, updateBacketDto);
    return new BacketResponseDto(updated);
  }

  @ApiOperation({ summary: 'Удалить позицию в корзине покупателя по id' })
  @Post('/remove/:id')
  async removeMenu(
    @Param('id') id: string,
    @Body() updateBacketDto: UpdateBacketDto,
  ) {
    const updated = await this.backetService.removeMenu(+id, updateBacketDto);
    return new BacketResponseDto(updated);
  }

  @ApiOperation({ summary: 'Удаление корзины по id' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removed = await this.backetService.remove(+id);
    return new BacketResponseDto(removed);
  }
}
