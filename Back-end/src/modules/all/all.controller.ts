import { Controller, Get } from '@nestjs/common';
import { AllService } from './all.service';

@Controller('all')
export class AllController {
  constructor(private readonly allService: AllService) {}

  @Get()
  findAll() {
    return this.allService.findAll();
  }

  /* NÃO VAI FUNCIONAR JÁ QUE ALGUMAS TABELAS POSSUEM A MESMA CHAVE PRIMÁRIA
  @Get('/unique')
  findOne(@Body('id') id: string) {
    return this.allService.findOne(id);
  }*/
}
