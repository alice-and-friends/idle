import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  presentingElement: any = null;
  classes = [
    {
      id: 'druid',
      label: 'Druid',
      icon: 'leaf-outline',
      description: '+10% income'
    },
    {
      id: 'warrior',
      label: 'Warrior',
      icon: 'shield-half-outline',
      description: '-25% damage taken'
    },
    {
      id: 'wizard',
      label: 'Wizard',
      icon: 'color-wand-outline',
      description: '+20% spell damage'
    }
  ];

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  constructor(/*private storage: StorageService, */private modalCtrl: ModalController) {
    //this.loadData();
    this.modalCtrl = modalCtrl;
  }

  async loadData() {
    this.data = null //await this.storage.getData();
  }

  selectClass(selectedClass: object) {
    this.setPlayerClass(selectedClass);
    this.modalCtrl.dismiss();
  }

  setPlayerClass(selectedClass: any) {
    const player = this.data.player;
    player.class = selectedClass.id;
    if (Math.sign(player.level) !== 1) {
      player.level = 1;
    }
    //this.storage.set('player', player);
  }

}
