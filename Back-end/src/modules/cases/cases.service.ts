import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class CasesService {
  constructor(private prisma: PrismaService) {}

  async createCase(data: Prisma.CasesCreateInput) {
    await this.prisma.cases.create({ data });

    return data;
  }

  async findAll() {
    const data = await this.prisma.cases.findMany();
    return data;
  }
}
