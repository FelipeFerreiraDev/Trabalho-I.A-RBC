import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma/prisma.service';
import { CasesModule } from './modules/cases/cases.module';
@Module({
  imports: [CasesModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
