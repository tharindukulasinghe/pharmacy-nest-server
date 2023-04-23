import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Item } from 'src/entities/item.entity';
import { ItemService } from 'src/services/item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly entityService: ItemService) {}

  @Post()
  create(@Body() item: Item) {
    return this.entityService.create(item);
  }

  @Get()
  findAll() {
    return this.entityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityService.findOne(+id);
  }

  @Put()
  update(@Body() item: Item) {
    return this.entityService.update(item);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityService.remove(+id);
  }
}
