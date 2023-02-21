import {StellarObject} from "./stellar-object";
import {randomIntFromInterval} from "../util";

export class AsteroidBelt implements StellarObject {
  description: string;
  size: number;
  cssClass: string[];
  interactive: boolean;
  requiredTech: number | null;

  constructor() {
    this.description = 'Asteroid belt';
    this.size = 100;
    this.cssClass = ['asteroid-belt-' + randomIntFromInterval(1, 6)];
    this.interactive = true;
    this.requiredTech = 1;
  }
}
