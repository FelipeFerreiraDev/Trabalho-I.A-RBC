import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class CasesService {
    constructor(private prisma: PrismaService) { }

    async createCase(data: Prisma.CasesCreateInput) {
        await this.prisma.cases.create({ data });

        return data;
    }

    async findAll() {
        const data = await this.prisma.cases.findMany();
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

    async compare() {

        let contador = 0;
        const data = await this.prisma.cases.findFirst({
            orderBy: {
                case: 'desc',
            },
        });

        const allCases = await this.prisma.cases.findMany();

        allCases.map((item) => {
            if((item.area_damaged === data.area_damaged)&& (item.canker_lesion === data.area_damaged) && (item.crop_hist === data.crop_hist) && (item.date === data.date) && (item.external_decay === data.external_decay) && (item.fruiting_bodies === data.fruiting_bodies) && (item.fruit_pods === data.fruit_pods) && (item.fruits_spots === data.fruits_spots) &&  (item.germination === data.germination) && (item.hail === data.hail) && (item.int_discolor === data.int_discolor) && (item.leaf_malf === data.leaf_malf) && (item.leaf_mild === data.leaf_mild) && (item.leaf_shread === data.leaf_shread) && (item.leafspots_halo === data.leafspots_halo) && (item.leafspots_marg === data.leafspots_marg) && (item.leafspots_size === data.leafspots_size) && (item.leaves === data.leaves) && (item.lodging === data.lodging) && (item.mold_growth === data.mold_growth) && (item.mycelium === data.mycelium) && (item.plant_growth === data.plant_growth) && (item.plant_stand === data.plant_stand) && (item.precip === data.precip) && (item.roots === data.roots) && (item.sclerotia === data.sclerotia) && (item.seed === data.seed) && (item.seed_discolor === data.seed_discolor) && (item.seed_size === data.seed_size) && (item.seed_tmt === data.seed_tmt) && (item.severity === data.severity) && (item.shriveling === data.shriveling) && (item.stem === data.stem) && (item.stem_cankers === data.stem_cankers) && (item.temp === data.temp)) {
                contador++;
            }
        });
        return contador;
    }
}
