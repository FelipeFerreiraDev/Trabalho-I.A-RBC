-- SQLite
-- SELECT *, 
-- 1-(2-Area_damaged.valor)/(4-1)
-- FROM CASES 
-- LEFT JOIN Area_damaged ON CASES.area_damaged = Area_damaged.area_damaged;

-- SELECT MAX(Area_damaged.valor) FROM Area_damaged;
-- SELECT MIN(Area_damaged.valor) FROM Area_damaged;

-- SELECT *, 
-- 1-(2-Area_damaged.valor)/(4-1) AS area_damaged_sl,
-- 1-(1-Canker_lesion.valor)/(3-0) AS canker_lesion_sl
-- FROM CASES
-- LEFT JOIN Area_damaged ON CASES.area_damaged = Area_damaged.area_damaged
-- LEFT JOIN Canker_lesion ON CASES.canker_lesion = Canker_lesion.canker_lesion;

ALTER COLUMN NAME valor TO VALOR IN ALL TABLES
ALTER TABLE Area_damaged RENAME COLUMN valor TO valor;
ALTER TABLE Canker_lesion RENAME COLUMN valor TO valor;
ALTER TABLE Crop_hist RENAME COLUMN valor TO valor;
ALTER TABLE Date RENAME COLUMN valor TO valor;
ALTER TABLE External_decay RENAME COLUMN valor TO valor;
ALTER TABLE Fruits_spots RENAME COLUMN valor TO valor;
ALTER TABLE Fruiting_bodies RENAME COLUMN valor TO valor;
ALTER TABLE Fruit_pods RENAME COLUMN valor TO valor;
ALTER TABLE Germination RENAME COLUMN valor TO valor;
ALTER TABLE Hail RENAME COLUMN valor TO valor;
ALTER TABLE Int_discolor RENAME COLUMN valor TO valor;
ALTER TABLE Leaf_malf RENAME COLUMN valor TO valor;
ALTER TABLE Leaf_mild RENAME COLUMN valor TO valor;
ALTER TABLE Leaf_shread RENAME COLUMN valor TO valor;
ALTER TABLE Leafspots_halo RENAME COLUMN valor TO valor;
ALTER TABLE Leafspots_marg RENAME COLUMN valor TO valor;
ALTER TABLE Leafspots_size RENAME COLUMN valor TO valor;
ALTER TABLE Leaves RENAME COLUMN valor TO valor;
ALTER TABLE Lodging RENAME COLUMN valor TO valor;
ALTER TABLE Mold_growth RENAME COLUMN valor TO valor;
ALTER TABLE Mycelium RENAME COLUMN valor TO valor;
ALTER TABLE Plant_growth RENAME COLUMN valor TO valor;
ALTER TABLE Plant_stand RENAME COLUMN valor TO valor;
ALTER TABLE Precip RENAME COLUMN valor TO valor;
ALTER TABLE Roots RENAME COLUMN valor TO valor;
ALTER TABLE Sclerotia RENAME COLUMN valor TO valor;
ALTER TABLE Seed RENAME COLUMN valor TO valor;
ALTER TABLE Seed_discolor RENAME COLUMN valor TO valor;
ALTER TABLE Seed_size RENAME COLUMN valor TO valor;
ALTER TABLE Seed_tmt RENAME COLUMN valor TO valor;
ALTER TABLE Severity RENAME COLUMN valor TO valor;
ALTER TABLE Shriveling RENAME COLUMN valor TO valor;
ALTER TABLE Stem RENAME COLUMN valor TO valor;
ALTER TABLE Stem_cankers RENAME COLUMN valor TO valor;
ALTER TABLE Temp RENAME COLUMN valor TO valor;

-- TESTES
-- SQLite
SELECT *,
1-(4-Area_damaged.valor)/(4-1) AS area_damaged_sl,
1-(1-Canker_lesion.valor)/(3-0) AS canker_lesion_sl
FROM CASES
LEFT JOIN Area_damaged ON CASES.area_damaged = Area_damaged.area_damaged
LEFT JOIN Canker_lesion ON CASES.canker_lesion = Canker_lesion.canker_lesion;