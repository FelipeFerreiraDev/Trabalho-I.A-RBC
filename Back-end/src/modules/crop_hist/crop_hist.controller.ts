import { Body, Controller, Get } from '@nestjs/common';
import { CropHistService } from './crop_hist.service';

@Controller('crop-hist')
export class CropHistController {
  constructor(private readonly cropHistService: CropHistService) {}

  @Get()
  findAll() {
    return this.cropHistService.findAll();
  }

  @Get('/unique')
  findOne(@Body('id') id: string) {
    return this.cropHistService.findOne(id);
  }
}
