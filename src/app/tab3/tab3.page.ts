import { Component } from '@angular/core';
import {IStellarObject} from "../models/i-stellar-object";
import {starTypes} from "../models/star";
import {planetTypes} from "../models/planetoid";
import {randomIntFromInterval} from "../util";
import {asteroidBeltTypes} from "../models/asteroid-belt";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  stuff: IStellarObject[] = []

  constructor() {
    /*
    starTypes.forEach(type => {
      type.cssVariants.forEach(variant => {
        this.stuff.push({
          description: type.name,
          size: randomIntFromInterval(type.sizeRange[0], type.sizeRange[1]),
          cssClass: ['star', variant],
          interactive: true,
          requiredTech: 1,
          loot: {},
        });
      })
    })
    */
    planetTypes.forEach(type => {
      type.cssVariants.forEach(variant => {
        this.stuff.push({
          description: type.name,
          size: randomIntFromInterval(type.sizeRange[0], type.sizeRange[1]),
          cssClass: ['planet', variant],
          interactive: true,
          requiredTech: 1,
          lootModel: type.lootModel,
          loot: {},
        });
      })
    })
    asteroidBeltTypes.forEach(type => {
      type.cssVariants.forEach(variant => {
        this.stuff.push({
          description: 'Asteroid belt',
          size: 100,
          cssClass: ['planet', variant],
          interactive: true,
          requiredTech: 1,
          lootModel: type.lootModel,
          loot: {},
        });
      })
    })
    /*
    for(let i = 1; i<=6; i++) {
      this.stuff.push({
        description: 'Asteroid belt',
        size: 100,
        cssClass: ['asteroid-belt-'+i],
        interactive: true,
        requiredTech: 1,
        lootModel: lootModels.asteroidBelt,
          loot: {},
      });
    }
    */
  }
}
