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

  async calc() {
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
        valor: 'desc',
      },
    });

    const valorCankerLesionMin = await this.prisma.canker_lesion.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorCropHistMin = await this.prisma.crop_hist.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorDateMin = await this.prisma.date.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorExternalMin = await this.prisma.external_decay.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorFruitPodsMin = await this.prisma.fruit_pods.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorFruitBodiesMin = await this.prisma.fruiting_bodies.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorFruitSpotsMin = await this.prisma.fruits_spots.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorGerminationMin = await this.prisma.germination.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorHailMin = await this.prisma.hail.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorIntDiscolorMin = await this.prisma.int_discolor.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafMalfMin = await this.prisma.leaf_malf.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafMildMin = await this.prisma.leaf_mild.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafShreaddMin = await this.prisma.leaf_shread.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafHaloMin = await this.prisma.leafspots_halo.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafSpotsMargMin = await this.prisma.leafspots_marg.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeafSpotSizeMin = await this.prisma.leafspots_size.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLeavesMin = await this.prisma.leaves.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorLodgingMin = await this.prisma.lodging.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorMoldGrowthMin = await this.prisma.mold_growth.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorMyceliumMin = await this.prisma.mycelium.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorPlantGrowthMin = await this.prisma.plant_growth.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorPlantStandMin = await this.prisma.plant_stand.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorPrecipMin = await this.prisma.precip.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorRootsMin = await this.prisma.roots.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSclerotiaMin = await this.prisma.sclerotia.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeedMin = await this.prisma.seed.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeedDiscolorMin = await this.prisma.seed_discolor.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeedSizeMin = await this.prisma.seed_size.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeedTmtMin = await this.prisma.seed_tmt.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorSeverityMin = await this.prisma.severity.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorShrivelingMin = await this.prisma.shriveling.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorStemMin = await this.prisma.stem.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorStemCankersMin = await this.prisma.stem_cankers.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });

    const valorTempMin = await this.prisma.temp.findFirst({
      orderBy: {
        valor: 'desc',
      },
    });
    return valorAreaDamagedMax;
    // const valorMax = await this.prisma
    //   .$queryRaw`SELECT Area_damaged.valor FROM Area_damaged ORDER BY Area_damaged.valor DESC LIMIT 1
    //   SELECT Crop_hist.valor FROM Crop_hist ORDER BY Crop_hist.valor DESC LIMIT 1
    //   `;
    // return valorMax;
    // -- SQLite
    // -- SELECT *,
    // -- 1-(2-Area_damaged.valor)/(4-1)
    // -- FROM CASES
    // -- LEFT JOIN Area_damaged ON CASES.area_damaged = Area_damaged.area_damaged;
    // -- SELECT MAX(Area_damaged.valor) FROM Area_damaged;
    // -- SELECT MIN(Area_damaged.valor) FROM Area_damaged;
    // -- SELECT MAX(Canker_lesion.valor) FROM Canker_lesion;
    // -- SELECT MIN(Canker_lesion.valor) FROM Canker_lesion;
    // -- SELECT MAX(Crop_hist.valor) FROM Crop_hist;
    // -- SELECT MIN(Crop_hist.valor) FROM Crop_hist;
    // -- SELECT MAX(Date.valor) FROM Date;
    // -- SELECT MIN(Date.valor) FROM Date;
    // -- SELECT MAX(External_decay.valor) FROM External_decay;
    // -- SELECT MIN(External_decay.valor) FROM External_decay;
    // -- SELECT MAX(Fruit_pods.valor) FROM Fruit_pods;
    // -- SELECT MIN(Fruit_pods.valor) FROM Fruit_pods;
    // -- SELECT MAX(Fruiting_bodies.valor) FROM Fruiting_bodies;
    // -- SELECT MIN(Fruiting_bodies.valor) FROM Fruiting_bodies;
    // -- SELECT MAX(Fruits_spots.valor) FROM Fruits_spots;
    // -- SELECT MIN(Fruits_spots.valor) FROM Fruits_spots;
    // -- SELECT MAX(Germination.valor) FROM Germination;
    // -- SELECT MIN(Germination.valor) FROM Germination;
    // -- SELECT MAX(Hail.valor) FROM Hail;
    // -- SELECT MIN(Hail.valor) FROM Hail;
    // -- SELECT MAX(Int_discolor.valor) FROM Int_discolor;
    // -- SELECT MIN(Int_discolor.valor) FROM Int_discolor;
    // -- SELECT MAX(Leaf_malf.valor) FROM Leaf_malf;
    // -- SELECT MIN(Leaf_malf.valor) FROM Leaf_malf;
    // -- SELECT MAX(Leaf_mild.valor) FROM Leaf_mild;
    // -- SELECT MIN(Leaf_mild.valor) FROM Leaf_mild;
    // -- SELECT MAX(Leaf_shread.valor) FROM Leaf_shread;
    // -- SELECT MIN(Leaf_shread.valor) FROM Leaf_shread;
    // -- SELECT MAX(Leafspots_halo.valor) FROM Leafspots_halo;
    // -- SELECT MIN(Leafspots_halo.valor) FROM Leafspots_halo;
    // -- SELECT MAX(Leafspots_marg.valor) FROM Leafspots_marg;
    // -- SELECT MIN(Leafspots_marg.valor) FROM Leafspots_marg;
    // -- SELECT MAX(Leafspots_size.valor) FROM Leafspots_size;
    // -- SELECT MIN(Leafspots_size.valor) FROM Leafspots_size;
    // -- SELECT MAX(Leaves.valor) FROM Leaves;
    // -- SELECT MIN(Leaves.valor) FROM Leaves;
    // -- SELECT MAX(Lodging.valor) FROM Lodging;
    // -- SELECT MIN(Lodging.valor) FROM Lodging;
    // -- SELECT MAX(Mold_growth.valor) FROM Mold_growth;
    // -- SELECT MIN(Mold_growth.valor) FROM Mold_growth;
    // -- SELECT MAX(Mycelium.valor) FROM Mycelium;
    // -- SELECT MIN(Mycelium.valor) FROM Mycelium;
    // -- SELECT MAX(Plant_growth.valor) FROM Plant_growth;
    // -- SELECT MIN(Plant_growth.valor) FROM Plant_growth;
    // -- SELECT MAX(Plant_stand.valor) FROM Plant_stand;
    // -- SELECT MIN(Plant_stand.valor) FROM Plant_stand;
    // -- SELECT MAX(Precip.valor) FROM Precip;
    // -- SELECT MIN(Precip.valor) FROM Precip;
    // -- SELECT MAX(Roots.valor) FROM Roots;
    // -- SELECT MIN(Roots.valor) FROM Roots;
    // -- SELECT MAX(Sclerotia.valor) FROM Sclerotia;
    // -- SELECT MIN(Sclerotia.valor) FROM Sclerotia;
    // -- SELECT MAX(Seed.valor) FROM Seed;
    // -- SELECT MIN(Seed.valor) FROM Seed;
    // -- SELECT MAX(Seed_discolor.valor) FROM Seed_discolor;
    // -- SELECT MIN(Seed_discolor.valor) FROM Seed_discolor;
    // -- SELECT MAX(Seed_size.valor) FROM Seed_size;
    // -- SELECT MIN(Seed_size.valor) FROM Seed_size;
    // -- SELECT MAX(Seed_tmt.valor) FROM Seed_tmt;
    // -- SELECT MIN(Seed_tmt.valor) FROM Seed_tmt;
    // -- SELECT MAX(Severity.valor) FROM Severity;
    // -- SELECT MIN(Severity.valor) FROM Severity;
    // -- SELECT MAX(Shriveling.valor) FROM Shriveling;
    // -- SELECT MIN(Shriveling.valor) FROM Shriveling;
    // -- SELECT MAX(Stem.valor) FROM Stem;
    // -- SELECT MIN(Stem.valor) FROM Stem;
    // -- SELECT MAX(Stem_cankers.valor) FROM Stem_cankers;
    // -- SELECT MIN(Stem_cankers.valor) FROM Stem_cankers;
    // -- SELECT MAX(Temp.valor) FROM Temp;
    // -- SELECT MIN(Temp.valor) FROM Temp;
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
