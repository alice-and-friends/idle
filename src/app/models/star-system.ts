import {Star} from "./star";
import {Zone, Planet} from "./planet";
import {AsteroidBelt} from "./asteroid-belt";
import {getWeightedRandom, randomIntFromInterval, shuffleArray} from "../util";
import {StellarObject} from "./stellar-object";


export const playerLevel = 10;

export type StarSystemType = {
  name: string;
  numberOfStars: number,
  weight: number;
  unlocksAtLevel: number;
  maxPlanets: number,
  chanceOfPlanets: number,
  allowedStarTypes: string[],
  requiredStarTypes?: string[],
}
export const starSystemTypes: StarSystemType[] = [
  {
    name: 'Star system',
    numberOfStars: 1,
    weight: 55,
    unlocksAtLevel: 1,
    maxPlanets: 9,
    chanceOfPlanets: 1,
    allowedStarTypes: [
      'Blue subdwarf',
      'Blue dwarf',
      'Blue giant',
      'Blue supergiant',
      'Blue hypergiant',
      'White dwarf',
      'Yellow subdwarf',
      'Yellow dwarf',
      'Yellow giant',
      'Yellow supergiant',
      'Yellow hypergiant',
      'Red subdwarf',
      'Red dwarf',
      'Red giant',
      'Red supergiant',
      'Red hypergiant',
      'Brown subdwarf',
      'Brown dwarf',
      // 'Pulsar',
      'Protostar',
      //'Black hole',
      'Black dwarf',
      'Frozen star',
      'Iron star',
    ],
  },
  {
    name: 'Binary star system',
    numberOfStars: 2,
    weight: 45,
    unlocksAtLevel: 2,
    maxPlanets: 9,
    chanceOfPlanets: 1,
    allowedStarTypes: [
      'Blue subdwarf',
      'Blue dwarf',
      'Blue giant',
      'Blue supergiant',
      // 'Blue hypergiant',
      'White dwarf',
      'Yellow subdwarf',
      'Yellow dwarf',
      'Yellow giant',
      'Yellow supergiant',
      // 'Yellow hypergiant',
      'Red subdwarf',
      'Red dwarf',
      'Red giant',
      'Red supergiant',
      // 'Red hypergiant',
      'Brown subdwarf',
      'Brown dwarf',
      // 'Pulsar',
      // 'Protostar',
      'Black hole',
      'Black dwarf',
      'Frozen star',
      'Iron star',
    ],
  },
  {
    name: 'Trinary star system',
    numberOfStars: 3,
    weight: 5,
    unlocksAtLevel: 3,
    maxPlanets: 8,
    chanceOfPlanets: 1,
    allowedStarTypes: [
      'Blue subdwarf',
      'Blue dwarf',
      'Blue giant',
      'Blue supergiant',
      // 'Blue hypergiant',
      'White dwarf',
      'Yellow subdwarf',
      'Yellow dwarf',
      'Yellow giant',
      'Yellow supergiant',
      // 'Yellow hypergiant',
      'Red subdwarf',
      'Red dwarf',
      'Red giant',
      'Red supergiant',
      // 'Red hypergiant',
      'Brown subdwarf',
      'Brown dwarf',
      // 'Pulsar',
      // 'Protostar',
      'Black hole',
      'Black dwarf',
      'Frozen star',
      'Iron star',
    ],
  },
  {
    name: 'Quintuple star system',
    numberOfStars: 4,
    weight: 1,
    unlocksAtLevel: 5,
    maxPlanets: 7,
    chanceOfPlanets: 0.8,
    allowedStarTypes: [
      'Blue subdwarf',
      'Blue dwarf',
      'Blue giant',
      'Blue supergiant',
      // 'Blue hypergiant',
      'White dwarf',
      'Yellow subdwarf',
      'Yellow dwarf',
      'Yellow giant',
      'Yellow supergiant',
      // 'Yellow hypergiant',
      'Red subdwarf',
      'Red dwarf',
      'Red giant',
      'Red supergiant',
      // 'Red hypergiant',
      'Brown subdwarf',
      'Brown dwarf',
      // 'Pulsar',
      // 'Protostar',
      'Black hole',
      'Black dwarf',
      'Frozen star',
      'Iron star'
    ],
  },
  {
    name: 'Ancient star system',
    numberOfStars: 3,
    weight: 5,
    unlocksAtLevel: 5,
    maxPlanets: 7,
    chanceOfPlanets: 0.8,
    allowedStarTypes: [
      // 'Blue subdwarf',
      // 'Blue dwarf',
      // 'Blue giant',
      // 'Blue supergiant',
      // 'Blue hypergiant',
      'White dwarf',
      // 'Yellow subdwarf',
      // 'Yellow dwarf',
      // 'Yellow giant',
      // 'Yellow supergiant',
      // 'Yellow hypergiant',
      // 'Red subdwarf',
      // 'Red dwarf',
      // 'Red giant',
      // 'Red supergiant',
      // 'Red hypergiant',
      // 'Brown subdwarf',
      'Brown dwarf',
      // 'Pulsar',
      // 'Protostar',
      'Black hole',
      // 'Black dwarf',
      'Frozen star',
      'Iron star',
    ],
    requiredStarTypes: ['Black hole'],
  },
  {
    name: 'Pulsar',
    numberOfStars: 1,
    weight: 1,
    unlocksAtLevel: 10,
    maxPlanets: 2,
    chanceOfPlanets: 0.1,
    allowedStarTypes: [],
    requiredStarTypes: ['Pulsar'],
  },
  {
    name: 'Binary pulsar',
    numberOfStars: 2,
    weight: 1,
    unlocksAtLevel: 10,
    maxPlanets: 2,
    chanceOfPlanets: 0.2,
    allowedStarTypes: ['Pulsar', 'White dwarf'],
    requiredStarTypes: ['Pulsar'],
  },
  {
    name: 'Rogue planet',
    numberOfStars: 0,
    weight: 1,
    unlocksAtLevel: 10,
    maxPlanets: 1,
    chanceOfPlanets: 1,
    allowedStarTypes: [],
  },
];
export class StarSystem {
  description: string = '';
  stars: StellarObject[] = [];
  planets: StellarObject[] = [];
  hasRarePlanet: boolean = false;

  constructor() {
    const starSystemType = getWeightedRandom(starSystemTypes.filter(
      type => type.unlocksAtLevel <= playerLevel
    ));
    this.description = starSystemType.name

    // Rogue planet special case
    if (starSystemType.maxPlanets === 1) {
      this.planets = [new Planet(Zone.Outer, 50)];
      return this; // No stars, no asteroid belts, just the one planet.
    }

    // Generate stars
    let starsNeeded = starSystemType.numberOfStars;
    if(starSystemType.requiredStarTypes) {
      starSystemType.requiredStarTypes.forEach((requiredType: string) => {
        console.log('require', requiredType, 'from', starSystemType.requiredStarTypes)
        this.stars.push(new Star([requiredType]));
        starsNeeded--;
      })
    }
    for(let i = 1; i <= starsNeeded; i++) {
      this.stars.push(new Star(starSystemType.allowedStarTypes));
    }
    // Sort stars by size
    this.stars = this.stars.sort((a, b) => {
      return a.size > b.size ? -1 : 1;
    })

    // Determine number of planets per zone
    const systemHasPlanets = Math.random() < starSystemType.chanceOfPlanets;
    const numberOfPlanets = systemHasPlanets ? randomIntFromInterval(1, starSystemType.maxPlanets) : 0;
    const zones = [
      {id: Zone.Inner, planetCount: 0, maxPlanets: 4, beltCount: 0, maxBelts: 1},
      {id: Zone.Habitable, planetCount: 0, maxPlanets: 4},
      {id: Zone.Outer, planetCount: 0, beltCount: 0, maxBelts: 1}
    ]
    if (systemHasPlanets) {
      for(let i = 1; i <= numberOfPlanets; i++) {
        const randomZone = zones[randomIntFromInterval(0, 2)]
        if (randomZone.id !== Zone.Outer && randomZone.planetCount < randomZone.maxPlanets!) {
          randomZone.planetCount++;
        }
        else {
          zones.find(z => z.id === Zone.Outer)!.planetCount++;
        }
      }
    }

    // Generate planets and asteroid belts, one zone at a time
    for(let zone of zones) {

      // Generate planets for zone
      let zoneObjects: StellarObject[] = [];
      for(let i = 1; i <= zone.planetCount; i++) {

        // If the system already has a rare planet,
        //  set the minimum weight to prevent another rare planet from spawning
        const minWeight = this.hasRarePlanet ? 20 : 0;

        // Generate a planet
        const newPlanet = new Planet(zone.id, minWeight)

        // Make sure the planet is not a duplicate
        const list = (this.planets.concat(zoneObjects)).map(p => p.cssClass.toString())
        if (list.includes(newPlanet.cssClass.toString())) {
          continue; // Duplicate discovered
        }

        // Check if the new planet is rare, set flag accordingly
        if(newPlanet.weight < 20) {
          this.hasRarePlanet = true;
        }

        // Commit
        zoneObjects.push(newPlanet)
      }

      // Maybe add an asteroid belt to the zone as well
      const zoneCanHaveMoreBelts = (beltCount: number) => {
        const maxAsteroidBelts = systemHasPlanets && zones.find(z => z.id === Zone.Habitable)!.planetCount > 0 ? 2: 1;
        return beltCount < maxAsteroidBelts;
      };
      const beltCount = this.planets.concat(zoneObjects).filter(o => o instanceof AsteroidBelt).length;
      if (zoneCanHaveMoreBelts(beltCount)) {
        const randomChance = Math.random() < 0.5;
        if(zone.id === Zone.Inner && randomChance) {
          zoneObjects.push(new AsteroidBelt())
        }
        else if(zone.id === Zone.Outer && (randomChance || beltCount === 0)) {
          zoneObjects.push(new AsteroidBelt())
        }
      }

      // Shuffle the contents of the zone
      zoneObjects = shuffleArray(zoneObjects);

      // Respect slotting
      zoneObjects = zoneObjects.sort((a, b) => {
        return a instanceof Planet && a.slot === 'first' ? -1 : 1;
      })

      // Merge and continue with next zone
      this.planets = this.planets.concat(zoneObjects)
    }

    // Remove any duplicate entries
    this.planets = this.planets.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.cssClass === value.cssClass
      ))
    )
  }
}
