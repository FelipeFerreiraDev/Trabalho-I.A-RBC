import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma/prisma.service';
import { CasesModule } from './modules/cases/cases.module';
import { AreaDamagedModule } from './modules/area_damaged/area_damaged.module';
@Module({
  imports: [CasesModule, AreaDamagedModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
