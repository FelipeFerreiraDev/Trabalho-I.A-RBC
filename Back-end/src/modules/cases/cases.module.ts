import { Module } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CasesController } from './cases.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [CasesController],
  providers: [CasesService, PrismaService],
})
export class CasesModule {}
