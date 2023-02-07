import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CasesService } from './cases.service';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Post()
  async createCase(@Body() data: Prisma.CasesCreateInput) {
    return this.casesService.createCase(data);
  }

  @Get()
  async findAll() {
    return this.casesService.findAll();
  }

  @Get('/log')
  async qualquerCoisa() {
    return 'qualquer coisa';
  }

  @Get('/last')
  async lastCase() {
    return this.casesService.lastCase();
  }

  @Get(':id')
  async findUnique(@Param('id') id: number) {
    return this.casesService.findUnique(id);
  }

  @Post('/calc/:id')
  async calcular(@Body() id: number) {
    return this.casesService.calc(id);
  }

  @Post('/update')
  async updateCase(@Body() data: Prisma.CasesUpdateInput) {
    return this.casesService.updateCase(data);
  }
}
