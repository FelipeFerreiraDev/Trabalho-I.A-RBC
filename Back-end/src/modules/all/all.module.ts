import { Module } from '@nestjs/common';
import { AllService } from './all.service';
import { AllController } from './all.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [AllController],
  providers: [AllService, PrismaService],
})
export class AllModule {}
