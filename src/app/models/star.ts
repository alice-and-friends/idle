import {getWeightedRandom, randomIntFromInterval} from "../util";
import {playerLevel} from "./star-system";
import {StellarObject} from "./stellar-object";

export const starSizes = {
  subdwarf: [80, 80],
  dwarf: [85, 85],
  white_dwarf: [75, 75],
  giant: [90, 90],
  supergiant: [95, 95],
  hypergiant: [100, 100],
  pulsar: [50, 50],
  protostar: [65, 65], // Due to css skew, protostars will still appear as big as hypergiants
  black_hole: [35, 100],
}
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
}
export const starTypes: StarType[] = [
  {
    name: 'Blue subdwarf',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: starSizes.giant,
    cssVariants: starColors.blue,
  },
  {
    name: 'Blue dwarf',
    weight: 0.1,
    unlocksAtLevel: 1,
    sizeRange: starSizes.giant,
    cssVariants: starColors.blue,
  },
  {
    name: 'Blue giant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: starSizes.giant,
    cssVariants: starColors.blue,
  },
  {
    name: 'Blue supergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: starSizes.supergiant,
    cssVariants: starColors.blue,
  },
  {
    name: 'Blue hypergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: starSizes.hypergiant,
    cssVariants: starColors.blue,
  },
  {
    name: 'White dwarf',
    weight: 10,
    unlocksAtLevel: 2,
    sizeRange: [70, 70],
    cssVariants: ['star-white-1'],
  },
  {
    name: 'Yellow subdwarf',
    weight: 1,
    unlocksAtLevel: 3,
    sizeRange: starSizes.subdwarf,
    cssVariants: starColors.yellow,
  },
  {
    name: 'Yellow dwarf',
    weight: 55,
    unlocksAtLevel: 1,
    sizeRange: starSizes.dwarf,
    cssVariants: starColors.yellow,
  },
  {
    name: 'Yellow giant',
    weight: 7,
    unlocksAtLevel: 1,
    sizeRange: starSizes.giant,
    cssVariants: starColors.yellow,
  },
  {
    name: 'Yellow supergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: starSizes.supergiant,
    cssVariants: starColors.yellow,
  },
  {
    name: 'Yellow hypergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: starSizes.hypergiant,
    cssVariants: starColors.yellow,
  },
  {
    name: 'Red subdwarf',
    weight: 5,
    unlocksAtLevel: 3,
    sizeRange: starSizes.subdwarf,
    cssVariants: starColors.red,
  },
  {
    name: 'Red dwarf',
    weight: 75,
    unlocksAtLevel: 1,
    sizeRange: starSizes.dwarf,
    cssVariants: starColors.red,
  },
  {
    name: 'Red giant',
    weight: 7,
    unlocksAtLevel: 1,
    sizeRange: starSizes.giant,
    cssVariants: starColors.red,
  },
  {
    name: 'Red supergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: starSizes.supergiant,
    cssVariants: starColors.red,
  },
  {
    name: 'Red hypergiant',
    weight: 1,
    unlocksAtLevel: 1,
    sizeRange: starSizes.hypergiant,
    cssVariants: starColors.red,
  },
  {
    name: 'Brown subdwarf',
    weight: 1,
    unlocksAtLevel: 3,
    sizeRange: starSizes.subdwarf,
    cssVariants: starColors.brown,
  },
  {
    name: 'Brown dwarf',
    weight: 10,
    unlocksAtLevel: 1,
    sizeRange: starSizes.dwarf,
    cssVariants: starColors.brown,
  },
  {
    name: 'Pulsar',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: starSizes.pulsar,
    cssVariants: ['star-pulsar-1', 'star-pulsar-2', 'star-pulsar-3', 'star-pulsar-4'],
  },
  {
    name: 'Protostar',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: starSizes.protostar,
    cssVariants: ['star-protostar-1', 'star-protostar-2'],
  },
  {
    name: 'Black hole',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: starSizes.black_hole,
    cssVariants: ['black-hole-1', 'black-hole-2'],
  },
  {
    name: 'Black dwarf',
    weight: 1,
    unlocksAtLevel: 10,
    sizeRange: starSizes.dwarf,
    cssVariants: ['star-black-1'],
  },
];
export class Star extends StellarObject {
  constructor(allowedTypes: string[]) {
    const options = starTypes.filter(type =>
      allowedTypes.includes(type.name) && type.unlocksAtLevel <= playerLevel
    );
    if(options.length < 1) {
      console.error('No options found for', allowedTypes);
    }
    const starType = getWeightedRandom(options);
    super({
      description: starType.name,
      size: randomIntFromInterval(starType.sizeRange[0], starType.sizeRange[1]),
      cssClass: ['star', starType.cssVariants[~~(Math.random() * starType.cssVariants.length)]],
      interactive: false,
    })
  }
}
