import { Module } from '@nestjs/common';
import { AreaDamagedService } from './area_damaged.service';
import { AreaDamagedController } from './area_damaged.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [AreaDamagedController],
  providers: [AreaDamagedService, PrismaService],
})
export class AreaDamagedModule {}
