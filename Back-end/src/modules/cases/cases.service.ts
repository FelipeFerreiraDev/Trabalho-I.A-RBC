import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class CasesService {
  constructor(private prisma: PrismaService) {}

  async createCase(data: Prisma.CasesCreateInput) {
    await this.prisma.cases.create({ data });

    return data;
  }

  async findAll() {
    const data = await this.prisma.cases.findMany({
      include: {
        area: true,
        canker: true,
        crop: true,
        date_new: true,
        external: true,
        fruiting: true,
        fruitpod: true,
        fruits: true,
        germination_new: true,
        hail_new: true,
        intdiscolor: true,
        leafmalf: true,
        leafmild: true,
        leafshread: true,
        leafspotshalo: true,
        leafspotsmarg: true,
        leafspotssize: true,
        leaves_new: true,
        lodging_new: true,
        mold: true,
        mycelium_new: true,
        plant: true,
        plantstand: true,
        precip_new: true,
        roots_new: true,
        sclerotia_new: true,
        seed_new: true,
        seeddiscolor: true,
        seedsize: true,
        seedtmt: true,
        severity_new: true,
        shriveling_new: true,
        stem_new: true,
        stemcankers: true,
        temp_new: true,
      },
    });
    return data;
  }

  async lastCase() {
    const data = await this.prisma.cases.findFirst({
      orderBy: {
        case: 'desc',
      },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.prisma.cases.findFirst({
      where: {
        case: id,
      },
      include: {
        area: true,
        canker: true,
        crop: true,
        date_new: true,
        external: true,
        fruiting: true,
        fruitpod: true,
        fruits: true,
        germination_new: true,
        hail_new: true,
        intdiscolor: true,
        leafmalf: true,
        leafmild: true,
        leafshread: true,
        leafspotshalo: true,
        leafspotsmarg: true,
        leafspotssize: true,
        leaves_new: true,
        lodging_new: true,
        mold: true,
        mycelium_new: true,
        plant: true,
        plantstand: true,
        precip_new: true,
        roots_new: true,
        sclerotia_new: true,
        seed_new: true,
        seeddiscolor: true,
        seedsize: true,
        seedtmt: true,
        severity_new: true,
        shriveling_new: true,
        stem_new: true,
        stemcankers: true,
        temp_new: true,
      },
    });
    return data;
  }
}
