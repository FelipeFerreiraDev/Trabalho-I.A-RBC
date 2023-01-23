import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma/prisma.service';
import { CasesModule } from './modules/cases/cases.module';
import { AreaDamagedModule } from './modules/area_damaged/area_damaged.module';
import { CankerLesionModule } from './modules/canker_lesion/canker_lesion.module';
import { CropHistModule } from './modules/crop_hist/crop_hist.module';
import { DateModule } from './modules/date/date.module';
import { AllModule } from './modules/all/all.module';
@Module({
  imports: [
    CasesModule,
    AreaDamagedModule,
    CankerLesionModule,
    CropHistModule,
    DateModule,
    AllModule,
  ],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
