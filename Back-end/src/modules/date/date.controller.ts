import { Body, Controller, Get } from '@nestjs/common';
import { DateService } from './date.service';

@Controller('date')
export class DateController {
  constructor(private readonly dateService: DateService) {}

  @Get()
  findAll() {
    return this.dateService.findAll();
  }

  @Get('/unique')
  findOne(@Body('id') id: string) {
    return this.dateService.findOne(id);
  }
}
