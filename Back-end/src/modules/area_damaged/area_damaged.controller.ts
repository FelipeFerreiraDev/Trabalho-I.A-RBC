import { Body, Controller, Get } from '@nestjs/common';
import { AreaDamagedService } from './area_damaged.service';

@Controller('area-damaged')
export class AreaDamagedController {
  constructor(private readonly areaDamagedService: AreaDamagedService) {}

  @Get()
  findAll() {
    return this.areaDamagedService.findAll();
  }

  @Get('/unique')
  findOne(@Body('id') id: string) {
    return this.areaDamagedService.findOne(id);
  }
}
