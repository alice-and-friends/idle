export interface StellarObject {
  description: string;
  size: number;
  cssClass: string[];
  interactive: boolean;
  requiredTech: number | null;
}
export const stellarObjectSizes = {
  star_hypergiant: [100, 100],
  star_supergiant: [95, 95],
  star_giant: [90, 90],
  star_dwarf: [85, 85],
  star_subdwarf: [70, 80],
  star_protostar: [65, 65], // Due to css skew, protostars will still appear as big as hypergiants
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
