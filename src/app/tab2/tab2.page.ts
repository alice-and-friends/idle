import { Component } from '@angular/core';
import { StorageService} from "../storage.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: any;

  constructor(private storage: StorageService) {
    this.loadData().then(() => this.startClock(storage));
  }

  async loadData() {
    this.data = await this.storage.getData();
  }

  startClock(s: StorageService) {
    setInterval(() => {
      this.tick(s)
    }, 1000);
  }

  tick(s: StorageService) {
    console.log('tick');

    try {
      this.updateResources(s)
    }
    catch(err) {
      console.error(err);
    }
  }

  updateResources(storage: StorageService) {

    const resource = this.data.resource;
    const lastUpdated = this.data.resourcesLastUpdated;

    if(lastUpdated) {
      const then = new Date(lastUpdated);
      const now = new Date();
      const timeElapsed = Math.round((now.getTime() - then.getTime()) / 1000);
      if (!Number.isFinite(timeElapsed)) throw new Error('timeElapsed is not a number')
      const balance = resource.gold.balance;
      if (!Number.isFinite(balance)) throw new Error('balance is not a number')
      const income = resource.gold.perSecond;
      if (!Number.isFinite(income)) throw new Error('income is not a number')
      const award = timeElapsed * income;
      console.log(lastUpdated, 'was', timeElapsed, 'seconds ago')
      console.log(`awarding ${award} (${timeElapsed}*${income}) gold`)
      resource.gold.balance += award;
      storage.set('resource', resource);
    }
    storage.set('resourcesLastUpdated', new Date());
  }

}
