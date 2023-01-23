import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class AreaDamagedService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.area_damaged.findMany();
  }

  async findOne(id: string) {
    return this.prisma.area_damaged.findUnique({ where: { area_damaged: id } });
  }
}
