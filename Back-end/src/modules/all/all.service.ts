import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class AllService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    // find all tables
    const data = {
      area_damaged: await this.prisma.area_damaged.findMany(),
      canker_lesion: await this.prisma.canker_lesion.findMany(),
      crop_hist: await this.prisma.crop_hist.findMany(),
      date: await this.prisma.date.findMany(),
      external_decay: await this.prisma.external_decay.findMany(),
      fruits_spots: await this.prisma.fruits_spots.findMany(),
      fruiting_bodies: await this.prisma.fruiting_bodies.findMany(),
      fruit_pods: await this.prisma.fruit_pods.findMany(),
      germination: await this.prisma.germination.findMany(),
      hail: await this.prisma.hail.findMany(),
      int_discolor: await this.prisma.int_discolor.findMany(),
      leaf_malf: await this.prisma.leaf_malf.findMany(),
      leaf_mild: await this.prisma.leaf_mild.findMany(),
      leaf_shread: await this.prisma.leaf_shread.findMany(),
      leafspots_halo: await this.prisma.leafspots_halo.findMany(),
      leafspots_marg: await this.prisma.leafspots_marg.findMany(),
      leafspots_size: await this.prisma.leafspots_size.findMany(),
      leaves: await this.prisma.leaves.findMany(),
      lodging: await this.prisma.lodging.findMany(),
      mold_growth: await this.prisma.mold_growth.findMany(),
      mycelium: await this.prisma.mycelium.findMany(),
      plant_growth: await this.prisma.plant_growth.findMany(),
      plant_stand: await this.prisma.plant_stand.findMany(),
      precip: await this.prisma.precip.findMany(),
      roots: await this.prisma.roots.findMany(),
      sclerotia: await this.prisma.sclerotia.findMany(),
      seed: await this.prisma.seed.findMany(),
      seed_discolor: await this.prisma.seed_discolor.findMany(),
      seed_size: await this.prisma.seed_size.findMany(),
      seed_tmt: await this.prisma.seed_tmt.findMany(),
      severity: await this.prisma.severity.findMany(),
      shriveling: await this.prisma.shriveling.findMany(),
      stem: await this.prisma.stem.findMany(),
      stem_cankers: await this.prisma.stem_cankers.findMany(),
      temp: await this.prisma.temp.findMany(),
    };
    return data;
  }

  async peso() {
    const data = {
      peso: await this.prisma.columnPeso.findMany({
        orderBy: {
          atributo: 'asc',
        },
      }),
    };

    return data;
  }
}
