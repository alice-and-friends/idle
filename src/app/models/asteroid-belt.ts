import {getWeightedRandom} from "../util";
import {LootModel, lootModels, StellarObject, stellarObjectSizes} from "./stellar-object";
import {playerLevel} from "./star-system";

export type AsteroidBeltType = {
  unlocksAtLevel: number,
  weight: number,
  cssVariants: string[];
  lootModel: LootModel;
}
export const asteroidBeltTypes = [
  {
    weight: 5,
    unlocksAtLevel: 1,
    cssVariants: ['asteroid-belt-1', 'asteroid-belt-2', 'asteroid-belt-3', 'asteroid-belt-5', 'asteroid-belt-6'],
    lootModel: lootModels.asteroidBelt,
  },
  {
    weight: 1,
    unlocksAtLevel: 3,
    cssVariants: ['asteroid-belt-4'],
    lootModel: lootModels.asteroidBeltSmall,
  },
]
export class AsteroidBelt implements StellarObject {
  description: string;
  size: number;
  cssClass: string[];
  interactive: boolean;
  requiredTech: number | null;
  lootModel: LootModel;

  constructor() {
    const typeSet = asteroidBeltTypes.filter(type => {
      return type.unlocksAtLevel <= playerLevel
    });
    const type = getWeightedRandom(typeSet);
    this.description = 'Asteroid belt';
    this.size = stellarObjectSizes.asteroid_belt[1];
    this.cssClass = ['planet', type.cssVariants[~~(Math.random() * type.cssVariants.length)]]
    this.interactive = true;
    this.requiredTech = 1;
    this.lootModel = type.lootModel;
  }
}
