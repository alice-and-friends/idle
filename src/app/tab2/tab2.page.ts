import { Component } from '@angular/core';
import { StorageService} from "../storage.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  title = 'Tab2';
  data: any;

  constructor(private storage: StorageService) {
    this.loadData();
  }

  async loadData() {
    this.data = await this.storage.getData();
  }

  async addPhotoToGallery() {
    await this.storage.set('name', 'Alice');
  }

}
