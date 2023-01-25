import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma/prisma.service';
import { CasesModule } from './modules/cases/cases.module';
import { AllModule } from './modules/all/all.module';
@Module({
  imports: [CasesModule, AllModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
