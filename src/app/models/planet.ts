import {getWeightedRandom, randomIntFromInterval} from "../util";
import {playerLevel} from "./star-system";
import {StellarObject} from "./stellar-object";

export enum Zone {
  Hot, Habitable, Cold
}
export const planetSizes = {
  giant: [65, 70],
  standard: [50, 60],
  dwarf: [35, 45],
  asteroid: [30, 30],
}
export type PlanetType = {
  name: string;
  sizeRange: number[];
  zones: Zone[];
  weight: number;
  unlocksAtLevel: number;
  cssVariants: string[];
  slot?: string;
}
export const planetTypes: PlanetType[] = [
  /**
   * COMMON PLANETS
   */
  {
    name: 'Protoplanet',
    sizeRange: planetSizes.dwarf,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-proto craters'],
  },
  {
    name: 'Asteroid',
    sizeRange: planetSizes.asteroid,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-asteroid-1', 'planet-asteroid-2', 'planet-asteroid-3'],
  },
  {
    name: 'Gas planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-gas-1', 'planet-gas-2', 'planet-gas-3', 'planet-gas-4', 'planet-gas-5', 'planet-gas-6', 'planet-gas-7', 'planet-gas-8', 'planet-gas-9', 'planet-gas-10'],
  },
  {
    name: 'Gas giant',
    sizeRange: planetSizes.giant,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 50,
    unlocksAtLevel: 1,
    cssVariants: ['planet-gas-1', 'planet-gas-2', 'planet-gas-3', 'planet-gas-4', 'planet-gas-5', 'planet-gas-6', 'planet-gas-7', 'planet-gas-8', 'planet-gas-9', 'planet-gas-10'],
  },
  {
    name: 'Ice planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Cold],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-ice-1', 'planet-ice-2', 'planet-ice-3', 'planet-ice-4'],
  },
  {
    name: 'Ice giant',
    sizeRange: planetSizes.giant,
    zones: [Zone.Cold],
    weight: 50,
    unlocksAtLevel: 1,
    cssVariants: ['planet-ice-1', 'planet-ice-2', 'planet-ice-3', 'planet-ice-4'],
  },
  {
    name: 'Forest planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-forest-1', 'planet-forest-2', 'planet-forest-3'],
  },
  {
    name: 'Swamp planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-swamp'],
  },
  {
    name: 'Lava planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-lava-1', 'planet-lava-2', 'planet-lava-3', 'planet-lava-4'],
  },
  {
    name: 'Ocean planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-ocean-1', 'planet-ocean-2'],
  },
  {
    name: 'Continental planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-continental-1', 'planet-continental-2', 'planet-continental-3'],
  },
  {
    name: 'Tropical planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-tropical'],
  },
  {
    name: 'Silicate planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-silicate-1', 'planet-silicate-2'],
  },
  {
    name: 'Rocky planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-rocky-1', 'planet-rocky-2', 'planet-rocky-3', 'planet-rocky-4'],
  },
  {
    name: 'Desert planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable],
    weight: 100,
    unlocksAtLevel: 1,
    cssVariants: ['planet-desert'],
  },

  /**
   * RARE PLANETS
   */
  {
    name: 'Iron planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-iron'],
  },
  {
    name: 'Chthonian planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-chthonian-1', 'planet-chthonian-2'],
    slot: 'first',
  },
  {
    name: 'Mycelium planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Habitable],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-mycelium'],
  },
  {
    name: 'Crystal planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-crystal-1', 'planet-crystal-2', 'planet-crystal-3'],
  },
  {
    name: 'Salt planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-salt'],
  },
  {
    name: 'Ammonia planet',
    sizeRange: planetSizes.standard,
    zones: [Zone.Hot, Zone.Habitable, Zone.Cold],
    weight: 1,
    unlocksAtLevel: 1,
    cssVariants: ['planet-ammonia'],
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
export class Planet implements StellarObject {
  description: string;
  size: number;
  cssClass: string[];
  weight: number;
  slot: string;
  interactive = true;
  requiredTech: number;

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
  }
}
