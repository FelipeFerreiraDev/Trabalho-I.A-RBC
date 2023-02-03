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
      orderBy: {
        case: 'desc',
      },
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

    const area = endCad.area;
    const canker = endCad.canker;
    const crop = endCad.crop;
    const date = endCad.date_new;
    const external = endCad.external;
    const fruiting = endCad.fruiting;
    const fruitpod = endCad.fruitpod;
    const fruits = endCad.fruits;
    const germination = endCad.germination_new;
    const hail = endCad.hail_new;
    const intdiscolor = endCad.intdiscolor;
    const leafmalf = endCad.leafmalf;
    const leafmild = endCad.leafmild;
    const leafshread = endCad.leafshread;
    const leafspotshalo = endCad.leafspotshalo;
    const leafspotsmarg = endCad.leafspotsmarg;
    const leafspotssize = endCad.leafspotssize;
    const leaves = endCad.leaves_new;
    const lodging = endCad.lodging_new;
    const mold = endCad.mold;
    const mycelium = endCad.mycelium_new;
    const plant = endCad.plant;
    const plantstand = endCad.plantstand;
    const precip = endCad.precip_new;
    const roots = endCad.roots_new;
    const sclerotia = endCad.sclerotia_new;
    const seed = endCad.seed_new;
    const seeddiscolor = endCad.seeddiscolor;
    const seedsize = endCad.seedsize;
    const seedtmt = endCad.seedtmt;
    const severity = endCad.severity_new;
    const shriveling = endCad.shriveling_new;
    const stem = endCad.stem_new;
    const stemcankers = endCad.stemcankers;
    const temp = endCad.temp_new;

    const areaValue = area ? area.valor : null;
    const cankerValue = canker ? canker.valor : null;
    const cropValue = crop ? crop.valor : null;
    const dateValue = date ? date.valor : null;
    const externalValue = external ? external.valor : null;
    const fruitingValue = fruiting ? fruiting.valor : null;
    const fruitpodValue = fruitpod ? fruitpod.valor : null;
    const fruitsValue = fruits ? fruits.valor : null;
    const germinationValue = germination ? germination.valor : null;
    const hailValue = hail ? hail.valor : null;
    const intdiscolorValue = intdiscolor ? intdiscolor.valor : null;
    const leafmalfValue = leafmalf ? leafmalf.valor : null;
    const leafmildValue = leafmild ? leafmild.valor : null;
    const leafshreadValue = leafshread ? leafshread.valor : null;
    const leafspotshaloValue = leafspotshalo ? leafspotshalo.valor : null;
    const leafspotsmargValue = leafspotsmarg ? leafspotsmarg.valor : null;
    const leafspotssizeValue = leafspotssize ? leafspotssize.valor : null;
    const leavesValue = leaves ? leaves.valor : null;
    const lodgingValue = lodging ? lodging.valor : null;
    const moldValue = mold ? mold.valor : null;
    const myceliumValue = mycelium ? mycelium.valor : null;
    const plantValue = plant ? plant.valor : null;
    const plantstandValue = plantstand ? plantstand.valor : null;
    const precipValue = precip ? precip.valor : null;
    const rootsValue = roots ? roots.valor : null;
    const sclerotiaValue = sclerotia ? sclerotia.valor : null;
    const seedValue = seed ? seed.valor : null;
    const seeddiscolorValue = seeddiscolor ? seeddiscolor.valor : null;
    const seedsizeValue = seedsize ? seedsize.valor : null;
    const seedtmtValue = seedtmt ? seedtmt.valor : null;
    const severityValue = severity ? severity.valor : null;
    const shrivelingValue = shriveling ? shriveling.valor : null;
    const stemValue = stem ? stem.valor : null;
    const stemcankersValue = stemcankers ? stemcankers.valor : null;
    const tempValue = temp ? temp.valor : null;

    const calcArea = this.prisma.$queryRaw`SELECT *,
    CASE WHEN ${areaValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${areaValue}-Area_damaged.valor)/(${valorAreaDamagedMax.valor}-${valorAreaDamagedMin.valor})) END AS area_damaged_sl,

    CASE WHEN ${cankerValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${cankerValue}-Canker_lesion.valor)/(${valorCankerLesionMax.valor}-${valorCankerLesionMin.valor})) END AS canker_lesion_sl,

    CASE WHEN ${cropValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${cropValue}-Crop_hist.valor)/(${valorCropHistMax.valor}-${valorCropHistMin.valor})) END AS crop_sl,

    CASE WHEN ${dateValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    CASE WHEN ABS(${dateValue}-Date.valor) < ABS(${dateValue}-(Date.valor-12)) THEN ABS((${dateValue}-Date.valor) / (12-1)) ELSE ABS((${dateValue}-(Date.valor-12)) / (12-1)) END END AS date_sl,

    CASE WHEN ${externalValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${externalValue}-External_decay.valor)/(${valorExternalMax.valor}-${valorExternalMin.valor})) END AS external_decay_sl,

    CASE WHEN ${fruitingValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${fruitingValue}-Fruiting_bodies.valor)/(${valorFruitBodiesMax.valor}-${valorFruitBodiesMin.valor})) END AS fruiting_bodies_sl,

    CASE WHEN ${fruitpodValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${fruitpodValue}-Fruit_pods.valor)/(${valorFruitPodsMax.valor}-${valorFruitPodsMin.valor})) END AS fruit_pods_sl,

    CASE WHEN ${fruitsValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${fruitsValue}-Fruits_spots.valor)/(${valorFruitSpotsMax.valor}-${valorFruitSpotsMin.valor})) END AS fruits_sl,

    CASE WHEN ${germinationValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${germinationValue}-Germination.valor)/(${valorGerminationMax.valor}-${valorGerminationMin.valor})) END AS germination_sl,

    CASE WHEN ${hailValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${hailValue}-Hail.valor)/(${valorHailMax.valor}-${valorHailMin.valor})) END AS hail_sl,

    CASE WHEN ${intdiscolorValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${intdiscolorValue}-Int_discolor.valor)/(${valorIntDiscolorMax.valor}-${valorIntDiscolorMin.valor})) END AS int_discolor_sl,

    CASE WHEN ${leafmalfValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${leafmalfValue}-Leaf_malf.valor)/(${valorLeafMalfMax.valor}-${valorLeafMalfMin.valor})) END AS leaf_malf_sl,

    CASE WHEN ${leafmildValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${leafmildValue}-Leaf_mild.valor)/(${valorLeafMildMax.valor}-${valorLeafMildMin.valor})) END AS leaf_mild_sl,

    CASE WHEN ${leafshreadValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${leafshreadValue}-Leaf_shread.valor)/(${valorLeafShreaddMax.valor}-${valorLeafShreaddMin.valor})) END AS leaf_shread_sl,

    CASE WHEN ${leafspotssizeValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${leafspotssizeValue}-Leafspots_size.valor)/(${valorLeafSpotSizeMax.valor}-${valorLeafSpotSizeMin.valor})) END AS leaf_spots_size_sl,

    CASE WHEN ${leafspotshaloValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${leafspotshaloValue}-Leafspots_halo.valor)/(${valorLeafHaloMax.valor}-${valorLeafHaloMin.valor})) END AS leaf_spots_halo_sl,

    CASE WHEN ${leafspotsmargValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${leafspotsmargValue}-Leafspots_marg.valor)/(${valorLeafSpotsMargMax.valor}-${valorLeafSpotsMargMin.valor})) END AS leaf_spots_marg_sl,

    CASE WHEN ${leavesValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${leavesValue}-Leaves.valor)/(${valorLeavesMax.valor}-${valorLeavesMin.valor})) END AS leaves_sl,

    CASE WHEN ${lodgingValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${lodgingValue}-Lodging.valor)/(${valorLodgingMax.valor}-${valorLodgingMin.valor})) END AS lodging_sl,

    CASE WHEN ${moldValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${moldValue}-Mold_growth.valor)/(${valorMoldGrowthMax.valor}-${valorMoldGrowthMin.valor})) END AS mold_growth_sl,

    CASE WHEN ${myceliumValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${myceliumValue}-Mycelium.valor)/(${valorMyceliumMax.valor}-${valorMyceliumMin.valor})) END AS mycelium_sl,

    CASE WHEN ${plantValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${plantValue}-Plant_growth.valor)/(${valorPlantGrowthMax.valor}-${valorPlantGrowthMin.valor})) END AS plant_growth_sl,

    CASE WHEN ${plantstandValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${plantstandValue}-Plant_stand.valor)/(${valorPlantStandMax.valor}-${valorPlantStandMin.valor})) END AS plant_stand_sl,

    CASE WHEN ${precipValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${precipValue}-Precip.valor)/(${valorPrecipMax.valor}-${valorPrecipMin.valor})) END AS precip_sl,

    CASE WHEN ${rootsValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${rootsValue}-Roots.valor)/(${valorRootsMax.valor}-${valorRootsMin.valor})) END AS roots_sl,

    CASE WHEN ${sclerotiaValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${sclerotiaValue}-Sclerotia.valor)/(${valorSclerotiaMax.valor}-${valorSclerotiaMin.valor})) END AS sclerotia_sl,

    CASE WHEN ${seedValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${seedValue}-Seed.valor)/(${valorSeedMax.valor}-${valorSeedMin.valor})) END AS seed_sl,

    CASE WHEN ${seeddiscolorValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${seeddiscolorValue}-Seed_discolor.valor)/(${valorSeedDiscolorMax.valor}-${valorSeedDiscolorMin.valor})) END AS seed_discolor_sl,

    CASE WHEN ${seedsizeValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${seedsizeValue}-Seed_size.valor)/(${valorSeedSizeMax.valor}-${valorSeedSizeMin.valor})) END AS seed_size_sl,

    CASE WHEN ${seedtmtValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${seedtmtValue}-Seed_tmt.valor)/(${valorSeedTmtMax.valor}-${valorSeedTmtMin.valor})) END AS seed_tmt_sl,

    CASE WHEN ${severityValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${severityValue}-Severity.valor)/(${valorSeverityMax.valor}-${valorSeverityMin.valor})) END AS severity_sl,

    CASE WHEN ${shrivelingValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${shrivelingValue}-Shriveling.valor)/(${valorShrivelingMax.valor}-${valorShrivelingMin.valor})) END AS shriveling_sl,

    CASE WHEN ${stemValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${stemValue}-Stem.valor)/(${valorStemMax.valor}-${valorStemMin.valor})) END AS stem_sl,

    CASE WHEN ${stemcankersValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${stemcankersValue}-Stem_cankers.valor)/(${valorStemCankersMax.valor}-${valorStemCankersMin.valor})) END AS stem_cankers_sl,

    CASE WHEN ${tempValue} IS NULL THEN CAST(0 AS FLOAT) ELSE
    1- ABS ((${tempValue}-Temp.valor)/(${valorTempMax.valor}-${valorTempMin.valor})) END AS temp_sl
   
    FROM CASES
    LEFT JOIN Area_damaged ON CASES.area_damaged = Area_damaged.area_damaged
    LEFT JOIN Canker_lesion ON CASES.canker_lesion = Canker_lesion.canker_lesion
    LEFT JOIN Crop_hist ON CASES.crop_hist = Crop_hist.crop_hist
    LEFT JOIN Date ON CASES.date = Date.date
    LEFT JOIN External_decay ON CASES.external_decay = External_decay.external_decay
    LEFT JOIN Fruit_pods ON CASES.fruit_pods = Fruit_pods.fruit_pods
    LEFT JOIN Fruiting_bodies ON CASES.fruiting_bodies = Fruiting_bodies.fruiting_bodies
    LEFT JOIN Fruits_spots ON CASES.fruits_spots = Fruits_spots.fruits_spots
    LEFT JOIN Germination ON CASES.germination = Germination.germination
    LEFT JOIN Hail ON CASES.hail = Hail.hail
    LEFT JOIN Int_discolor ON CASES.int_discolor = Int_discolor.int_discolor
    LEFT JOIN Leaf_malf ON CASES.leaf_malf = Leaf_malf.leaf_malf
    LEFT JOIN Leaf_mild ON CASES.leaf_mild = Leaf_mild.leaf_mild
    LEFT JOIN Leaf_shread ON CASES.leaf_shread = Leaf_shread.leaf_shread
    LEFT JOIN Leafspots_halo ON CASES.leafspots_halo = Leafspots_halo.leafspots_halo
    LEFT JOIN Leafspots_marg ON CASES.leafspots_marg = Leafspots_marg.leafspots_marg
    LEFT JOIN Leafspots_size ON CASES.leafspots_size = Leafspots_size.leafspots_size
    LEFT JOIN Leaves ON CASES.leaves = Leaves.leaves
    LEFT JOIN Lodging ON CASES.lodging = Lodging.lodging
    LEFT JOIN Mold_growth ON CASES.mold_growth = Mold_growth.mold_growth
    LEFT JOIN Mycelium ON CASES.mycelium = Mycelium.mycelium
    LEFT JOIN Plant_growth ON CASES.plant_growth = Plant_growth.plant_growth
    LEFT JOIN Plant_stand ON CASES.plant_stand = Plant_stand.plant_stand
    LEFT JOIN Precip ON CASES.precip = Precip.precip
    LEFT JOIN Roots ON CASES.roots = Roots.roots
    LEFT JOIN Sclerotia ON CASES.sclerotia = Sclerotia.sclerotia
    LEFT JOIN Seed ON CASES.seed = Seed.seed
    LEFT JOIN Seed_discolor ON CASES.seed_discolor = Seed_discolor.seed_discolor
    LEFT JOIN Seed_size ON CASES.seed_size = Seed_size.seed_size
    LEFT JOIN Seed_tmt ON CASES.seed_tmt = Seed_tmt.seed_tmt
    LEFT JOIN Severity ON CASES.severity = Severity.severity
    LEFT JOIN Shriveling ON CASES.shriveling = Shriveling.shriveling
    LEFT JOIN Stem ON CASES.stem = Stem.stem
    LEFT JOIN Stem_cankers ON CASES.stem_cankers = Stem_cankers.stem_cankers
    LEFT JOIN Temp ON CASES.temp = Temp.temp
    ;`;

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
