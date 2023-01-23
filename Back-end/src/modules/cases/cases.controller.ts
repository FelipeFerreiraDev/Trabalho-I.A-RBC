import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CasesService } from './cases.service';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Post()
  async createCase(@Body() data: Prisma.CasesCreateInput) {
    return this.casesService.createCase(data);
  }
}
