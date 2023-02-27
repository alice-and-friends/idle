import {getWeightedRandom, randomIntFromInterval} from "../util";
import {playerLevel} from "./star-system";
import {LootModel, lootModels, IStellarObject, stellarObjectSizes} from "./i-stellar-object";
import {StellarObject} from "./stellar-object";

export const starColors = {
  blue: ['star-blue-1', 'star-blue-2', 'star-blue-3', 'star-blue-4', 'star-blue-5', 'star-blue-6'],
  white: ['star-white-1'],
  yellow: ['star-yellow-1', 'star-yellow-2', 'star-yellow-3', 'star-yellow-4', 'star-yellow-5', 'star-yellow-6'],
  red: ['star-red-1', 'star-red-2'],
  brown: ['star-brown-1', 'star-brown-2', 'star-brown-3', 'star-brown-4', 'star-brown-5', 'star-brown-6', 'star-brown-7'],
}
export type StarType = {
  name: string;
  weight: number;
  unlocksAtLevel: number;
  sizeRange: number[];
  cssVariants: string[];
  lootModel: LootModel;
}
export const starTypes: StarType[] = [
  {
    name: 'Blue subdwarf',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_giant,
    cssVariants: starColors.blue,
    lootModel: lootModels.starCommon,
  },
  {
    name: 'Blue dwarf',
    weight: 0.1,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_giant,
    cssVariants: starColors.blue,
    lootModel: lootModels.starRare,
  },
  {
    name: 'Blue giant',
    weight: 2,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_giant,
    cssVariants: starColors.blue,
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'Blue supergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_supergiant,
    cssVariants: starColors.blue,
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'Blue hypergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_hypergiant,
    cssVariants: starColors.blue,
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'White dwarf',
    weight: 10,
    unlocksAtLevel: 2,
    sizeRange: stellarObjectSizes.star_white_dwarf,
    cssVariants: ['star-white-1'],
    lootModel: lootModels.starCommon,
  },
  {
    name: 'Yellow subdwarf',
    weight: 1,
    unlocksAtLevel: 3,
    sizeRange: stellarObjectSizes.star_subdwarf,
    cssVariants: starColors.yellow,
    lootModel: lootModels.starCommon,
  },
  {
    name: 'Yellow dwarf',
    weight: 55,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_dwarf,
    cssVariants: starColors.yellow,
    lootModel: lootModels.starCommon,
  },
  {
    name: 'Yellow giant',
    weight: 7,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_giant,
    cssVariants: starColors.yellow,
    lootModel: lootModels.starCommon,
  },
  {
    name: 'Yellow supergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_supergiant,
    cssVariants: starColors.yellow,
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'Yellow hypergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_hypergiant,
    cssVariants: starColors.yellow,
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'Red subdwarf',
    weight: 5,
    unlocksAtLevel: 3,
    sizeRange: stellarObjectSizes.star_subdwarf,
    cssVariants: starColors.red,
    lootModel: lootModels.starCommon,
  },
  {
    name: 'Red dwarf',
    weight: 75,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_dwarf,
    cssVariants: starColors.red,
    lootModel: lootModels.starCommon,
  },
  {
    name: 'Red giant',
    weight: 7,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_giant,
    cssVariants: starColors.red,
    lootModel: lootModels.starCommon,
  },
  {
    name: 'Red supergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_supergiant,
    cssVariants: starColors.red,
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'Red hypergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_hypergiant,
    cssVariants: starColors.red,
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'Brown subdwarf',
    weight: 1,
    unlocksAtLevel: 3,
    sizeRange: stellarObjectSizes.star_subdwarf,
    cssVariants: starColors.brown,
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'Brown dwarf',
    weight: 10,
    unlocksAtLevel: 1,
    sizeRange: stellarObjectSizes.star_dwarf,
    cssVariants: starColors.brown,
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'Pulsar',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: stellarObjectSizes.star_pulsar,
    cssVariants: ['star-pulsar-1', 'star-pulsar-2', 'star-pulsar-3', 'star-pulsar-4'],
    lootModel: lootModels.starRare,
  },
  {
    name: 'Protostar',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: stellarObjectSizes.star_protostar,
    cssVariants: ['star-protostar-1', 'star-protostar-2'],
    lootModel: lootModels.starRare,
  },
  {
    name: 'Black hole',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: stellarObjectSizes.black_hole,
    cssVariants: ['black-hole-1', 'black-hole-2'],
    lootModel: lootModels.starSemiRare,
  },
  {
    name: 'Black dwarf',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: stellarObjectSizes.star_dwarf,
    cssVariants: ['star-black'],
    lootModel: lootModels.starRare,
  },
  {
    name: 'Frozen star',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: stellarObjectSizes.star_dwarf,
    cssVariants: ['star-frozen'],
    lootModel: lootModels.starRare,
  },
  {
    name: 'Iron star',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: stellarObjectSizes.star_dwarf,
    cssVariants: ['star-iron'],
    lootModel: lootModels.starRare,
  },
];
export class Star extends StellarObject {
  constructor(allowedTypes: string[]) {
    const typeSet = starTypes.filter(type =>
      allowedTypes.includes(type.name) && type.unlocksAtLevel <= playerLevel
    );
    if(typeSet.length < 1) {
      console.error('No options found for', allowedTypes);
    }
    const starType = getWeightedRandom(typeSet);
    super(
      starType.name,
      randomIntFromInterval(starType.sizeRange[0], starType.sizeRange[1]),
      ['star', starType.cssVariants[~~(Math.random() * starType.cssVariants.length)]],
      true,
      1,
      starType.lootModel,
    )
  }
}
