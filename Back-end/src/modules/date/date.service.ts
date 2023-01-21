import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class DateService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.date.findMany();
  }

  async findOne(id: string) {
    return this.prisma.date.findUnique({ where: { date: id } });
  }
}
