import {getWeightedRandom, randomIntFromInterval} from "../util";
import {playerLevel} from "./star-system";
import {generateLoot, Loot, LootModel, lootModels, StellarObject, stellarObjectSizes} from "./stellar-object";

export enum Zone {
  Inner, Habitable, Outer
}
export type PlanetType = {
  name: string;
  sizeRange: number[];
  zones: Zone[];
  weight: number;
  unlocksAtLevel: number;
  cssVariants: string[];
  slot?: string;
  lootModel: LootModel;
}
export const planetTypes: PlanetType[] = [
  /**
   * COMMON PLANETS
   */
  {
    name: 'Protoplanet',
    sizeRange: stellarObjectSizes.planet_proto,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-proto-1', 'planet-proto-2'],
    lootModel: lootModels.protoplanet,
  },
  {
    name: 'Protoplanet',
    sizeRange: stellarObjectSizes.planet_proto,
    zones: [Zone.Inner, Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-proto-3', 'planet-proto-4'],
    lootModel: lootModels.protoplanet,
  },
  {
    name: 'Asteroid',
    sizeRange: stellarObjectSizes.asteroid,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-asteroid-1', 'planet-asteroid-2', 'planet-asteroid-3'],
    lootModel: lootModels.terrestrialDwarf,
  },
  {
    name: 'Gas planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-gas-1', 'planet-gas-2', 'planet-gas-3', 'planet-gas-4', 'planet-gas-5', 'planet-gas-6', 'planet-gas-7', 'planet-gas-8', 'planet-gas-9', 'planet-gas-10', 'planet-gas-11'],
    lootModel: lootModels.gas,
  },
  {
    name: 'Gas giant',
    sizeRange: stellarObjectSizes.planet_giant,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 50,
    unlocksAtLevel: 1,
    cssVariants: ['planet-gas-1', 'planet-gas-2', 'planet-gas-3', 'planet-gas-4', 'planet-gas-5', 'planet-gas-6', 'planet-gas-7', 'planet-gas-8', 'planet-gas-9', 'planet-gas-10', 'planet-gas-11'],
    lootModel: lootModels.gasGiant,
  },
  {
    name: 'Gas dwarf',
    sizeRange: stellarObjectSizes.planet_dwarf,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 50,
    unlocksAtLevel: 1,
    cssVariants: ['planet-gas-1', 'planet-gas-2', 'planet-gas-3', 'planet-gas-4', 'planet-gas-5', 'planet-gas-6', 'planet-gas-7', 'planet-gas-8', 'planet-gas-9', 'planet-gas-10', 'planet-gas-11'],
    lootModel: lootModels.gasDwarf,
  },
  {
    name: 'Ice planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Outer],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-ice-1', 'planet-ice-2', 'planet-ice-3', 'planet-ice-4'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Ice giant',
    sizeRange: stellarObjectSizes.planet_giant,
    zones: [Zone.Outer],
    weight: 50,
    unlocksAtLevel: 1,
    cssVariants: ['planet-ice-1', 'planet-ice-2', 'planet-ice-3', 'planet-ice-4'],
    lootModel: lootModels.terrestrialGiant,
  },
  {
    name: 'Forest planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-forest-1', 'planet-forest-2', 'planet-forest-3'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Swamp planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-swamp'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Lava planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner, Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-lava-1', 'planet-lava-2', 'planet-lava-3', 'planet-lava-4', 'planet-lava-5'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Ocean planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-ocean-1', 'planet-ocean-2'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Continental planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-continental-1', 'planet-continental-2', 'planet-continental-3'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Tropical planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-tropical'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Silicate planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-silicate-1', 'planet-silicate-2'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Rocky planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-rocky-1', 'planet-rocky-2', 'planet-rocky-3', 'planet-rocky-4', 'planet-rocky-5'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Desert planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner, Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-desert-1', 'planet-desert-2'],
    lootModel: lootModels.terrestrial,
  },

  /**
   * RARE PLANETS
   */
  {
    name: 'Iron planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 25,
    unlocksAtLevel: 1,
    cssVariants: ['planet-iron'],
    lootModel: lootModels.terrestrial,
  },
  {
    name: 'Chthonian planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-chthonian-1', 'planet-chthonian-2'],
    slot: 'first',
    lootModel: lootModels.gasRare,
  },
  {
    name: 'Mycelium planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Habitable],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-mycelium'],
    lootModel: lootModels.terrestrialRare,
  },
  {
    name: 'Crystal planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-crystal-1', 'planet-crystal-2', 'planet-crystal-3'],
    lootModel: lootModels.terrestrialRare,
  },
  {
    name: 'Salt planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-salt'],
    lootModel: lootModels.terrestrialRare,
  },
  {
    name: 'Ammonia planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner, Zone.Habitable, Zone.Outer],
    weight: 10,
    unlocksAtLevel: 1,
    cssVariants: ['planet-ammonia-1', 'planet-ammonia-2', 'planet-ammonia-3'],
    lootModel: lootModels.terrestrialUncommon,
  },
  {
    name: 'Double ringed planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Habitable, Zone.Outer],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-double-ringed'],
    lootModel: lootModels.terrestrialRare,
  },
  {
    name: 'Tidally locked planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Inner],
    weight: 10,
    unlocksAtLevel: 1,
    cssVariants: ['planet-tidally-locked-1'],
    lootModel: lootModels.terrestrialUncommon,
  },
  {
    name: 'Tidally locked planet',
    sizeRange: stellarObjectSizes.planet_standard,
    zones: [Zone.Habitable],
    weight: 10,
    unlocksAtLevel: 1,
    cssVariants: ['planet-tidally-locked-2', 'planet-tidally-locked-3'],
    lootModel: lootModels.terrestrialUncommon,
  },
  /*
  {
    name: 'Tomb planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-tomb'],
  },
  {
    name: 'Radiotrophic planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-radiotrophic'],
  },
  {
    name: 'Ringworld',
    sizeRange: planetSizes.standard,
    zones: [Zone.Habitable],
    weight: 1,
    unlocksAtLevel: 1,
  },
  {
    name: 'Shattered ring',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 1,
    unlocksAtLevel: 1,
  },
  {
    name: 'Template',
    sizeRange: planetSizes.standard,
    zones: [Zones.Hot, Zones.Habitable, Zones.Cold],
    weight: 100,
    unlocksAtLevel: 1,
  },
  */
];
export class Planetoid implements StellarObject {
  description: string;
  size: number;
  cssClass: string[];
  weight: number;
  slot: string;
  interactive = true;
  requiredTech: number;
  // lootModel: LootModel;
  loot: Loot;
  lootStr: string;

  constructor(zone: Zone, minWeight: number) {
    const typeSet = planetTypes.filter(type => {
      return type.zones.includes(zone) && type.weight >= minWeight && type.unlocksAtLevel <= playerLevel
    });
    const planetType = getWeightedRandom(typeSet);
    this.description = planetType.name;
    this.size = randomIntFromInterval(planetType.sizeRange[0], planetType.sizeRange[1]);
    this.cssClass = ['planet', planetType.cssVariants[~~(Math.random() * planetType.cssVariants.length)]];
    this.weight = planetType.weight;
    this.slot = planetType.slot;
    this.requiredTech = 1;
    // this.lootModel = planetType.lootModel;
    this.loot = generateLoot(planetType.lootModel);
    this.lootStr = JSON.stringify(this.loot);
  }
}
