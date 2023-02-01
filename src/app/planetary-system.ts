export const playerLevel = 10;
function getWeightedRandom(items: any[]) {
  items = items.filter(type => type.unlocksAtLevel <= playerLevel)
  if(!items.length) {
    console.warn("getWeightedRandom can't select from empty list")
  }
  const weights = items.reduce((acc, item, i) => {
    acc.push(item.weight + (acc[i - 1] ?? 0));
    return acc;
  }, []);
  const random = Math.random() * weights.at(-1);
  return items[weights.findIndex((weight: number) => weight > random)];
}
function aChanceInB(a: number, b: number) {
  return (Math.random() * b) < a
}
export type StarSize = {
  name: string;
  weight: number;
  unlocksAtLevel: number;
}
export type StarType = {
  name: string;
  weight: number;
  unlocksAtLevel: number;
  color: string | null
  colorVariants: string[] | null;
}
export const starColorVariants = [
  {name: 'Red', colors: [], weight: 70},
  {name: 'Yellow', colors: [], weight: 15},
  {name: 'White', colors: [], weight: 10},
  {name: 'Blue', colors: [], weight: 5},
  {name: 'Brown', colors: [], weight: 1}
]
export const starTypes: StarType[] = [
  {
    name: 'Dwarf',
    weight: 80,
    unlocksAtLevel: 1,
    color: null,
    colorVariants: ['Red', 'Yellow', 'White', 'Brown'],
  },
  {
    name: 'Subdwarf',
    color: null,
    colorVariants: ['Red', 'Yellow'],
    weight: 5,
    unlocksAtLevel: 3,
  },
  {
    name: 'Giant',
    color: null,
    colorVariants: ['Red', 'Yellow', 'Blue'],
    weight: 10,
    unlocksAtLevel: 3,
  },
  {
    name: 'Supergiant',
    color: null,
    colorVariants: ['Red', 'Yellow', 'Blue'],
    weight: 1,
    unlocksAtLevel: 5,
  },
  {
    name: 'Hypergiant',
    color: null,
    colorVariants: ['Red', 'Yellow', 'Blue'],
    weight: 1,
    unlocksAtLevel: 5,
  },
  {
    name: 'Protostar',
    color: '#ffffff',
    colorVariants: null,
    weight: 1,
    unlocksAtLevel: 10,
  },
  {
    name: 'Black hole',
    color: '#000000',
    colorVariants: null,
    weight: 1,
    unlocksAtLevel: 10,
  },
];
export const satelliteTypes = [
  {
    name: 'Planet',
    unlocksAtLevel: 1,
    weight: 1,
  },
  {
    name: 'Protoplanet',
    unlocksAtLevel: 1,
    weight: 1,
  },
  {
    name: 'Asteroid belt',
    unlocksAtLevel: 1,
    weight: 1,
  },
];
export const planetarySystemTypes = [
  {
    name: 'Star system',
    numberOfStars: 1,
    weight: 55,
    unlocksAtLevel: 1,
    allowedStarTypes: ['Protostar', 'Subdwarf', 'Dwarf', 'Giant', 'Supergiant', 'Hypergiant'],

  },
  {
    name: 'Binary star system',
    numberOfStars: 2,
    weight: 45,
    unlocksAtLevel: 2,
    allowedStarTypes: ['Subdwarf', 'Dwarf', 'Giant', 'Supergiant', 'Black hole'],
  },
  {
    name: 'Trinary star system',
    numberOfStars: 3,
    weight: 5,
    unlocksAtLevel: 3,
    allowedStarTypes: ['Subdwarf', 'Dwarf', 'Giant', 'Supergiant', 'Black hole'],
  },
  {
    name: 'Quintuple star system',
    numberOfStars: 4,
    weight: 1,
    unlocksAtLevel: 5,
    allowedStarTypes: ['Subdwarf', 'Dwarf', 'Giant', 'Supergiant', 'Black hole'],
  },
];
export class Star {
  description: string;
  superstructure: undefined

  constructor(allowedTypes: string[]) {
    console.log(1, allowedTypes);

    const starType = getWeightedRandom(starTypes.filter(type => allowedTypes.includes(type.name)));
    this.description = starType.name
  }
}
export class PlanetarySystem {
  description: string;
  stars: Star[] = [];

  constructor() {
    const planetarySystemType = getWeightedRandom(planetarySystemTypes);
    this.description = planetarySystemType.name

    for(let i = 1; i <= planetarySystemType.numberOfStars; i++) {
      this.stars.push(new Star(planetarySystemType.allowedStarTypes));
    }
  }
}
