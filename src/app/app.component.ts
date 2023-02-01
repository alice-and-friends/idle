import { Component } from '@angular/core';
import {StorageService} from "./storage.service";
import {PlanetarySystem} from "./planetary-system";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: StorageService) {
    this.storage.init();
    console.log(new PlanetarySystem())
  }
}
