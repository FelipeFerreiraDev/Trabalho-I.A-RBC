-- CreateTable
CREATE TABLE "Cases" (
    "case" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc_doenca" TEXT NOT NULL,
    "area_damaged" TEXT,
    "canker_lesion" TEXT,
    "crop_hist" TEXT,
    "date" TEXT,
    "external_decay" TEXT,
    "fruits_spots" TEXT,
    "fruiting_bodies" TEXT,
    "fruit_pods" TEXT,
    "germination" TEXT,
    "hail" TEXT,
    "int_discolor" TEXT,
    "leaf_malf" TEXT,
    "leaf_mild" TEXT,
    "leaf_shread" TEXT,
    "leafspots_halo" TEXT,
    "leafspots_size" TEXT,
    "leafspots_marg" TEXT,
    "leaves" TEXT,
    "lodging" TEXT,
    "mold_growth" TEXT,
    "mycelium" TEXT,
    "plant_growth" TEXT,
    "plant_stand" TEXT,
    "precip" TEXT,
    "roots" TEXT,
    "sclerotia" TEXT,
    "seed" TEXT,
    "seed_discolor" TEXT,
    "seed_size" TEXT,
    "seed_tmt" TEXT,
    "severity" TEXT,
    "shriveling" TEXT,
    "stem" TEXT,
    "stem_cankers" TEXT,
    "temp" TEXT,
    CONSTRAINT "Cases_area_damaged_fkey" FOREIGN KEY ("area_damaged") REFERENCES "Area_damaged" ("area_damaged") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_canker_lesion_fkey" FOREIGN KEY ("canker_lesion") REFERENCES "Canker_lesion" ("canker_lesion") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_crop_hist_fkey" FOREIGN KEY ("crop_hist") REFERENCES "Crop_hist" ("crop_hist") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_date_fkey" FOREIGN KEY ("date") REFERENCES "Date" ("date") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_external_decay_fkey" FOREIGN KEY ("external_decay") REFERENCES "External_decay" ("external_decay") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_fruits_spots_fkey" FOREIGN KEY ("fruits_spots") REFERENCES "Fruits_spots" ("fruits_spots") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_fruiting_bodies_fkey" FOREIGN KEY ("fruiting_bodies") REFERENCES "Fruiting_bodies" ("fruiting_bodies") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_fruit_pods_fkey" FOREIGN KEY ("fruit_pods") REFERENCES "Fruit_pods" ("fruit_pods") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_germination_fkey" FOREIGN KEY ("germination") REFERENCES "Germination" ("germination") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_hail_fkey" FOREIGN KEY ("hail") REFERENCES "Hail" ("hail") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_int_discolor_fkey" FOREIGN KEY ("int_discolor") REFERENCES "Int_discolor" ("int_discolor") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_leaf_malf_fkey" FOREIGN KEY ("leaf_malf") REFERENCES "Leaf_malf" ("leaf_malf") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_leaf_mild_fkey" FOREIGN KEY ("leaf_mild") REFERENCES "Leaf_mild" ("leaf_mild") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_leaf_shread_fkey" FOREIGN KEY ("leaf_shread") REFERENCES "Leaf_shread" ("leaf_shread") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_leafspots_halo_fkey" FOREIGN KEY ("leafspots_halo") REFERENCES "Leafspots_halo" ("leafspots_halo") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_leafspots_size_fkey" FOREIGN KEY ("leafspots_size") REFERENCES "Leafspots_size" ("leafspots_size") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_leafspots_marg_fkey" FOREIGN KEY ("leafspots_marg") REFERENCES "Leafspots_marg" ("leafspots_marg") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_leaves_fkey" FOREIGN KEY ("leaves") REFERENCES "Leaves" ("leaves") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_lodging_fkey" FOREIGN KEY ("lodging") REFERENCES "Lodging" ("lodging") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_mold_growth_fkey" FOREIGN KEY ("mold_growth") REFERENCES "Mold_growth" ("mold_growth") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_mycelium_fkey" FOREIGN KEY ("mycelium") REFERENCES "Mycelium" ("mycelium") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_plant_growth_fkey" FOREIGN KEY ("plant_growth") REFERENCES "Plant_growth" ("plant_growth") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_plant_stand_fkey" FOREIGN KEY ("plant_stand") REFERENCES "Plant_stand" ("plant_stand") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_precip_fkey" FOREIGN KEY ("precip") REFERENCES "Precip" ("precip") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_roots_fkey" FOREIGN KEY ("roots") REFERENCES "Roots" ("roots") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_sclerotia_fkey" FOREIGN KEY ("sclerotia") REFERENCES "Sclerotia" ("sclerotia") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_seed_fkey" FOREIGN KEY ("seed") REFERENCES "Seed" ("seed") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_seed_discolor_fkey" FOREIGN KEY ("seed_discolor") REFERENCES "Seed_discolor" ("seed_discolor") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_seed_size_fkey" FOREIGN KEY ("seed_size") REFERENCES "Seed_size" ("seed_size") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_seed_tmt_fkey" FOREIGN KEY ("seed_tmt") REFERENCES "Seed_tmt" ("seed_tmt") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_severity_fkey" FOREIGN KEY ("severity") REFERENCES "Severity" ("severity") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_shriveling_fkey" FOREIGN KEY ("shriveling") REFERENCES "Shriveling" ("shriveling") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_stem_fkey" FOREIGN KEY ("stem") REFERENCES "Stem" ("stem") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_stem_cankers_fkey" FOREIGN KEY ("stem_cankers") REFERENCES "Stem_cankers" ("stem_cankers") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cases_temp_fkey" FOREIGN KEY ("temp") REFERENCES "Temp" ("temp") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Area_damaged" (
    "area_damaged" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Canker_lesion" (
    "canker_lesion" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Crop_hist" (
    "crop_hist" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Date" (
    "date" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "External_decay" (
    "external_decay" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Fruits_spots" (
    "fruits_spots" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Fruiting_bodies" (
    "fruiting_bodies" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Fruit_pods" (
    "fruit_pods" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Germination" (
    "germination" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Hail" (
    "hail" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Int_discolor" (
    "int_discolor" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Leaf_malf" (
    "leaf_malf" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Leaf_mild" (
    "leaf_mild" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Leaf_shread" (
    "leaf_shread" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Leafspots_halo" (
    "leafspots_halo" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Leafspots_size" (
    "leafspots_size" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Leafspots_marg" (
    "leafspots_marg" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Leaves" (
    "leaves" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Lodging" (
    "lodging" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Mold_growth" (
    "mold_growth" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Mycelium" (
    "mycelium" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Plant_growth" (
    "plant_growth" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Plant_stand" (
    "plant_stand" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Precip" (
    "precip" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Roots" (
    "roots" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Sclerotia" (
    "sclerotia" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Seed" (
    "seed" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Seed_discolor" (
    "seed_discolor" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Seed_size" (
    "seed_size" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Seed_tmt" (
    "seed_tmt" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Severity" (
    "severity" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Shriveling" (
    "shriveling" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Stem" (
    "stem" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Stem_cankers" (
    "stem_cankers" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Temp" (
    "temp" TEXT NOT NULL PRIMARY KEY,
    "valor" INTEGER NOT NULL
);
