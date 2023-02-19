import { Component } from '@angular/core';
import {StarSystem} from "../models/star-system";
import {StorageService} from "../storage.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data: any;
  presentingElement: any = null;
  system = new StarSystem()

  constructor(private storage: StorageService) {
    this.loadData().then(() => this.startClock(storage));

    console.log(
      this.system.description,
      this.system.stars.map(a => a.description),
      this.system.planets.map(a => a.description)
    )
  }
  async loadData() {
    this.data = null//await this.storage.getData();
  }

  startClock(s: StorageService) {
    setInterval(() => {
      //this.tick(s)
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

  dailyRewardAvailable() {
    return this.timeUntilDailyRewardAvailable() <= 0;
  }

  timeUntilDailyRewardAvailable() {
    const lastCollected = this.data.dailyReward.lastCollected;
    if(lastCollected === null) {
      return 0;
    }

    const then = new Date(lastCollected);
    const now = new Date();
    const timeElapsed = Math.round((now.getTime() - then.getTime()) / 1000);
    const cooldown = 5; //20*60*60; // Reward can be collected every 20 hours
    return cooldown - timeElapsed;
  }

  collectDailyReward() {
    if(!this.dailyRewardAvailable()) {
      console.warn('Daily reward is not ready');
      return false;
    }
    let dailyReward = this.data.dailyReward;
    dailyReward.lastCollected = new Date()
    if(Number.isFinite(dailyReward.streak)) {
      console.log(1, dailyReward);
      dailyReward.streak++;
    }
    else{
      console.log(2);
      dailyReward.streak = 1;
    }
    console.log('attempting to set dailyReward as', dailyReward);
    this.storage.set('dailyReward', dailyReward);
    return true;
  }

}
