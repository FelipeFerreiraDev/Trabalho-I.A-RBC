import { Controller, Get } from '@nestjs/common';
import { AllService } from './all.service';

@Controller('all')
export class AllController {
  constructor(private readonly allService: AllService) {}

  @Get()
  findAll() {
    return this.allService.findAll();
  }

  @Get('/peso')
  peso() {
    return this.allService.peso();
  }
}
