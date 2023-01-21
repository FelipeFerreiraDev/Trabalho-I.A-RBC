import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class CropHistService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.crop_hist.findMany();
  }

  async findOne(id: string) {
    return this.prisma.crop_hist.findUnique({ where: { crop_hist: id } });
  }
}
