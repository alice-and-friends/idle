import {ResourceType} from "./resource";
import {randomIntFromInterval} from "../util";

export interface StellarObject {
  description: string;
  size: number;
  cssClass: string[];
  interactive: boolean;
  requiredTech: number | null;
  lootModel?: LootModel;
  loot?: Loot;
}
enum stellarObjectType {
  AsteroidBelt,
  ProtoPlanet,
  Asteroid,
  IcePlanet,
  ForestPlanet,
  LavaPlanet,
  OceanPlanet,
  ContinentalPlanet,
  TropicalPlanet,
  SilicatePlanet,
  RockyPlanet,
  DesertPlanet,
  GasPlanet,
  GasGiant,
  GasDwarf,
  IceGiant,
  IronPlanet,
  AmmoniaPlanet,
  TidallyLockedPlanet,
  ChthonianPlanet,
  MyceliumPlanet,
  SaltPlanet,
  DoubleRingedPlanet,
  RedDwarf,
  YellowDwarf,
  WhiteDwarf,
  BrownDwarf,
  RedGiant,
  RedSubdwarf,
  BlueGiant,
  BlueSubdwarf,
  BlueSupergiant,
  BlueHypergiant,
  YellowSubdwarf,
  YellowGiant,
  YellowSupergiant,
  YellowHypergiant,
  RedSupergiant,
  RedHypergiant,
  BrownSubdwarf,
  Pulsar,
  Protostar,
  BlackHole,
  BlackDwarf,
  BlueDwarf,
  FrozenStar,
  IronStar,
  SwampPlanet,
  CrystalPlanet,
}
export const stellarObjectSizes = {
  star_hypergiant: [100, 100],
  star_supergiant: [95, 95],
  star_giant: [90, 90],
  star_dwarf: [85, 85],
  star_subdwarf: [70, 80],
  star_protostar: [65, 65], // Dwarfue to css skew, protostars will still appear as big as hypergiants
  star_white_dwarf: [45, 55],
  star_pulsar: [50, 50],

  planet_giant: [55, 60],
  planet_standard: [45, 55],
  planet_dwarf: [40, 45],
  planet_proto: [35, 40],

  asteroid_belt: [100, 100],
  asteroid: [35, 35],

  black_hole: [35, 100],
}
export type Loot = { [key in ResourceType]? : number }
export const generateLoot = (lootModel: LootModel) => {
  let loot: Loot = {};
  let range: number[] | undefined;
  let amount: number | undefined;
  let chance: boolean | undefined;

  range = lootModel[ResourceType.Science];
  if (range) {
    amount = randomIntFromInterval(range[0], range[1]);
    loot[ResourceType.Science] = amount;
  }

  range = lootModel[ResourceType.Common];
  if (range) {
    amount = randomIntFromInterval(range[0], range[1]);
    loot[ResourceType.Common] = amount;
  }

  range = lootModel[ResourceType.Uncommon];
  if (range) {
    amount = randomIntFromInterval(range[0], range[1]);
    chance = range[0] ? true : Math.random() < 0.5;
    if(chance && amount) {
      loot[ResourceType.Uncommon] = amount;
    }
  }

  range = lootModel[ResourceType.Rare];
  if (range) {
    amount = randomIntFromInterval(range[0], range[1]);
    chance = range[0] ? true : Math.random() < 0.2;
    if(chance && amount) {
      loot[ResourceType.Rare] = amount;
    }
  }

  return loot;
}
const LootAmount = {
  none: 0,
  tiny: 50,
  small: 200,
  medium: 500,
  large: 1000,
  huge: 1500,
  gargantuan: 2000,
}
export type LootModel = { [key in ResourceType]? : number[] }
export const lootModels = {
  asteroidBelt: {
    [ResourceType.Common]: [LootAmount.small, LootAmount.medium],
  },
  asteroidBeltSmall: {
    [ResourceType.Common]: [LootAmount.tiny, LootAmount.small],
  },
  protoplanet: {
    [ResourceType.Common]: [LootAmount.tiny, LootAmount.small],
  },
  terrestrialDwarf: {
    [ResourceType.Common]: [LootAmount.tiny, LootAmount.small],
  },
  terrestrial: {
    [ResourceType.Common]: [LootAmount.small, LootAmount.medium],
    [ResourceType.Uncommon]: [LootAmount.tiny, LootAmount.small],
    [ResourceType.Rare]: [LootAmount.none, LootAmount.tiny],
  },
  terrestrialGiant: {
    [ResourceType.Common]: [LootAmount.medium, LootAmount.huge],
    [ResourceType.Uncommon]: [LootAmount.small, LootAmount.medium],
    [ResourceType.Rare]: [LootAmount.none, LootAmount.small],
  },
  terrestrialUncommon: {
    [ResourceType.Common]: [LootAmount.small, LootAmount.medium],
    [ResourceType.Uncommon]: [LootAmount.small, LootAmount.medium],
    [ResourceType.Rare]: [LootAmount.tiny, LootAmount.small],
  },
  terrestrialRare: {
    [ResourceType.Science]: [LootAmount.small, LootAmount.large],
    [ResourceType.Common]: [LootAmount.small, LootAmount.medium],
    [ResourceType.Uncommon]: [LootAmount.small, LootAmount.medium],
    [ResourceType.Rare]: [LootAmount.small, LootAmount.medium],
  },
  gasDwarf: {
    [ResourceType.Common]: [LootAmount.tiny, LootAmount.small],
    [ResourceType.Uncommon]: [LootAmount.tiny, LootAmount.small],
  },
  gas: {
    [ResourceType.Common]: [LootAmount.small, LootAmount.medium],
    [ResourceType.Uncommon]: [LootAmount.small, LootAmount.medium],
  },
  gasGiant: {
    [ResourceType.Common]: [LootAmount.small, LootAmount.large],
    [ResourceType.Uncommon]: [LootAmount.medium, LootAmount.huge],
  },
  gasRare: {
    [ResourceType.Science]: [LootAmount.small, LootAmount.medium],
    [ResourceType.Uncommon]: [LootAmount.tiny, LootAmount.small],
  },
  starCommon: {},
  starUnCommon: {
    [ResourceType.Science]: [LootAmount.tiny, LootAmount.medium],
  },
  starSemiRare: {
    [ResourceType.Science]: [LootAmount.medium, LootAmount.huge],
  },
  starRare: {
    [ResourceType.Science]: [LootAmount.huge, LootAmount.gargantuan],
  }
}
