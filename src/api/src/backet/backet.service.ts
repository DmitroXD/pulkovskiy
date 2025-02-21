import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Backet } from './entity/backet.entity';
import { CreateBacketDto } from './dto/create-backet.dto';
import { UpdateBacketDto } from './dto/update-backet.dto';
import { MenuService } from '../menu/menu.service';

@Injectable()
export class BacketService {
  private readonly logger = new Logger(BacketService.name);

  constructor(
    @InjectRepository(Backet)
    private readonly backerRepository: Repository<Backet>,
    private readonly menuService: MenuService,
  ) {}

  async create(createBacketDto: CreateBacketDto) {
    const backet = await this.backerRepository.save(
      this.backerRepository.create({
        ...createBacketDto,
      }),
    );
    this.logger.debug(`Backet created:` + JSON.stringify(backet));
    return backet;
  }
  async addMenu(id: number, updateBackerDto: UpdateBacketDto) {
    const [found, menu] = await Promise.all([
      this.findOne(id),
      this.menuService.findOne(updateBackerDto.menuId),
    ]);
    found.menus.push(menu);
    await this.backerRepository.save(found);
    return found;
  }

  async removeMenu(id: number, updateBackerDto: UpdateBacketDto) {
    const [found, menu] = await Promise.all([
      this.findOne(id),
      this.menuService.findOne(updateBackerDto.menuId),
    ]);
    found.menus = found.menus.filter((menuItem) => menuItem.id !== menu.id);
    await this.backerRepository.save(found);
    return found;
  }

  async findAll() {
    return await this.backerRepository.find({
      relations: ['menus'],
    });
  }

  async findOne(id: number) {
    return await this.backerRepository.findOneOrFail({
      relations: ['menus'],
      where: { id },
    });
  }

  async remove(id: number) {
    const found = await this.backerRepository.findOneByOrFail({ id });
    await this.backerRepository.softDelete(found);
    this.logger.debug(`Backet with ID ${id} removed `);
    return found;
  }
}
