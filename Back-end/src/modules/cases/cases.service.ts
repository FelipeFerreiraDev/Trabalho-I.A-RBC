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

  async calc(id: number) {
    const valorAreaDamagedMax = await this.prisma.area_damaged.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorCankerLesionMax = await this.prisma.canker_lesion.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorCropHistMax = await this.prisma.crop_hist.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorDateMax = await this.prisma.date.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorExternalMax = await this.prisma.external_decay.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorFruitPodsMax = await this.prisma.fruit_pods.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorFruitBodiesMax = await this.prisma.fruiting_bodies.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorFruitSpotsMax = await this.prisma.fruits_spots.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorGerminationMax = await this.prisma.germination.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorHailMax = await this.prisma.hail.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorIntDiscolorMax = await this.prisma.int_discolor.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafMalfMax = await this.prisma.leaf_malf.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafMildMax = await this.prisma.leaf_mild.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafShreaddMax = await this.prisma.leaf_shread.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafHaloMax = await this.prisma.leafspots_halo.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafSpotsMargMax = await this.prisma.leafspots_marg.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafSpotSizeMax = await this.prisma.leafspots_size.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeavesMax = await this.prisma.leaves.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLodgingMax = await this.prisma.lodging.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorMoldGrowthMax = await this.prisma.mold_growth.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorMyceliumMax = await this.prisma.mycelium.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorPlantGrowthMax = await this.prisma.plant_growth.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorPlantStandMax = await this.prisma.plant_stand.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorPrecipMax = await this.prisma.precip.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorRootsMax = await this.prisma.roots.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSclerotiaMax = await this.prisma.sclerotia.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeedMax = await this.prisma.seed.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeedDiscolorMax = await this.prisma.seed_discolor.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeedSizeMax = await this.prisma.seed_size.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeedTmtMax = await this.prisma.seed_tmt.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeverityMax = await this.prisma.severity.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorShrivelingMax = await this.prisma.shriveling.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorStemMax = await this.prisma.stem.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorStemCankersMax = await this.prisma.stem_cankers.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorTempMax = await this.prisma.temp.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });
    const valorAreaDamagedMin = await this.prisma.area_damaged.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorCankerLesionMin = await this.prisma.canker_lesion.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorCropHistMin = await this.prisma.crop_hist.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorDateMin = await this.prisma.date.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorExternalMin = await this.prisma.external_decay.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorFruitPodsMin = await this.prisma.fruit_pods.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorFruitBodiesMin = await this.prisma.fruiting_bodies.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorFruitSpotsMin = await this.prisma.fruits_spots.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorGerminationMin = await this.prisma.germination.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorHailMin = await this.prisma.hail.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorIntDiscolorMin = await this.prisma.int_discolor.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorLeafMalfMin = await this.prisma.leaf_malf.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorLeafMildMin = await this.prisma.leaf_mild.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorLeafShreaddMin = await this.prisma.leaf_shread.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorLeafHaloMin = await this.prisma.leafspots_halo.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorLeafSpotsMargMin = await this.prisma.leafspots_marg.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorLeafSpotSizeMin = await this.prisma.leafspots_size.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorLeavesMin = await this.prisma.leaves.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorLodgingMin = await this.prisma.lodging.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorMoldGrowthMin = await this.prisma.mold_growth.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorMyceliumMin = await this.prisma.mycelium.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorPlantGrowthMin = await this.prisma.plant_growth.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorPlantStandMin = await this.prisma.plant_stand.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorPrecipMin = await this.prisma.precip.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorRootsMin = await this.prisma.roots.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorSclerotiaMin = await this.prisma.sclerotia.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorSeedMin = await this.prisma.seed.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorSeedDiscolorMin = await this.prisma.seed_discolor.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorSeedSizeMin = await this.prisma.seed_size.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorSeedTmtMin = await this.prisma.seed_tmt.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorSeverityMin = await this.prisma.severity.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorShrivelingMin = await this.prisma.shriveling.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorStemMin = await this.prisma.stem.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorStemCankersMin = await this.prisma.stem_cankers.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const valorTempMin = await this.prisma.temp.findFirst({
      orderBy: {
        valor: 'asc',
      },
    });

    const endCad = await this.prisma.cases.findFirst({
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

    const calcArea = this.prisma.$queryRaw`SELECT *,
    1-(ABS (${endCad.area.valor}-Area_damaged.valor))/(${valorAreaDamagedMax.valor}-${valorAreaDamagedMin.valor}) AS area_damaged_sl,
    1-(ABS (${endCad.canker.valor}-Canker_lesion.valor))/(${valorCankerLesionMax.valor}-${valorCankerLesionMin.valor}) AS canker_lesion_sl
    FROM CASES
    LEFT JOIN Area_damaged ON CASES.area_damaged = Area_damaged.area_damaged
    LEFT JOIN Canker_lesion ON CASES.canker_lesion = Canker_lesion.canker_lesion;`;

    return calcArea;
    // -- SQLite
    // -- SELECT *,
    // -- 1-(2-Area_damaged.valor)/(4-1)
    // -- FROM CASES
    // y = valor que o usuário inseriu
    // z = valor máximo
    // x = valor mínimo
    // SELECT *,
    // 1-(y-Area_damaged.valor)/(z-x) AS area_damaged_sl,
    // 1-(1-Canker_lesion.valor)/(3-0) AS canker_lesion_sl
    // FROM CASES
    // LEFT JOIN Area_damaged ON CASES.area_damaged = Area_damaged.area_damaged
    // LEFT JOIN Canker_lesion ON CASES.canker_lesion = Canker_lesion.canker_lesion;
  }
}
