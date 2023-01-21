import { Module } from '@nestjs/common';
import { DateService } from './date.service';
import { DateController } from './date.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [DateController],
  providers: [DateService, PrismaService],
})
export class DateModule {}
