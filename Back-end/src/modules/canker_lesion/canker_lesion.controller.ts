import { Body, Controller, Get } from '@nestjs/common';
import { CankerLesionService } from './canker_lesion.service';

@Controller('canker-lesion')
export class CankerLesionController {
  constructor(private readonly cankerLesionService: CankerLesionService) {}
  @Get()
  findAll() {
    return this.cankerLesionService.findAll();
  }

  @Get('/unique')
  findOne(@Body('id') id: string) {
    return this.cankerLesionService.findOne(id);
  }
}
