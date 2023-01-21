import { Module } from '@nestjs/common';
import { CropHistService } from './crop_hist.service';
import { CropHistController } from './crop_hist.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  controllers: [CropHistController],
  providers: [CropHistService, PrismaService],
})
export class CropHistModule {}
