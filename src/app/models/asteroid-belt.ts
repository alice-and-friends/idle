import {StellarObject} from "./stellar-object";

export class AsteroidBelt extends StellarObject {
  constructor() {
    super({
      description: 'Asteroid belt',
      size: 100,
      cssClass: ['asteroid-belt-1', 'asteroid-belt-2', 'asteroid-belt-3', 'asteroid-belt-4'][~~(Math.random() * 4)],
      interactive: true,
    })
  }
}
