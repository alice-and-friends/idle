import { Component } from '@angular/core';
import {StellarObject} from "../models/stellar-object";
import {starTypes} from "../models/star";
import {planetTypes} from "../models/planet";
import {AsteroidBelt} from "../models/asteroid-belt";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  stuff: StellarObject[] = []

  constructor() {
    for(let i = 1; i<=6; i++) {
      this.stuff.push({
        description: 'Asteroid belt',
        size: 100,
        cssClass: ['asteroid-belt-'+i],
        interactive: true,
        requiredTech: 1
      });
    }
    starTypes.forEach(type => {
      type.cssVariants.forEach(variant => {
        this.stuff.push({
          description: type.name,
          size: type.sizeRange[1],
          cssClass: ['star', variant],
          interactive: true,
          requiredTech: 1
        });
      })
    })
    planetTypes.forEach(type => {
      type.cssVariants.forEach(variant => {
        this.stuff.push({
          description: type.name,
          size: type.sizeRange[1],
          cssClass: ['planet', variant],
          interactive: true,
          requiredTech: 1
        });
      })
    })
  }
}
