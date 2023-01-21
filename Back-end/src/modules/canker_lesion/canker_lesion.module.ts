import { Module } from '@nestjs/common';
import { CankerLesionService } from './canker_lesion.service';
import { CankerLesionController } from './canker_lesion.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [CankerLesionController],
  providers: [CankerLesionService, PrismaService],
})
export class CankerLesionModule {}
