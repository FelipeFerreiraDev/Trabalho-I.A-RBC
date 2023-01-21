import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class CankerLesionService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.canker_lesion.findMany();
  }

  async findOne(id: string) {
    return this.prisma.canker_lesion.findUnique({
      where: { canker_lesion: id },
    });
  }
}
