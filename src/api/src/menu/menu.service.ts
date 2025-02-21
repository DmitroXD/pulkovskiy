import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entity/menu.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  private readonly logger = new Logger(MenuService.name);

  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async create(createMenuDto: CreateMenuDto) {
    const menu = await this.menuRepository.save(
      this.menuRepository.create({
        ...createMenuDto,
      }),
    );
    this.logger.debug(`Menu created:` + JSON.stringify(menu));
    return menu;
  }

  async findAll() {
    return await this.menuRepository.find();
  }

  async findOne(id: number) {
    return await this.menuRepository.findOneByOrFail({ id });
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    const updated = await this.menuRepository.preload({
      id,
      ...updateMenuDto,
    });

    if (!updated) {
      this.logger.debug(`Menu for update with ID: #${id} not found`);
      throw new NotFoundException(`Menu #${id} not found`);
    }

    this.logger.debug(`Menu with ID: #${id} updated`);
    return updated;
  }

  async remove(id: number) {
    const found = await this.menuRepository.findOneByOrFail({ id });
    await this.menuRepository.softDelete(found);
    this.logger.debug(`Menu with ID ${id} removed `);
    return found;
  }
}
