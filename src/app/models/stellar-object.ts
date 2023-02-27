import {IStellarObject, Loot, LootModel} from "./i-stellar-object";
import {ResourceType} from "./resource";
import {randomIntFromInterval} from "../util";

export abstract class StellarObject implements IStellarObject {

  protected constructor(
    public description: string,
    public size: number,
    public cssClass: string[],
    public interactive: boolean,
    public requiredTech: number | null,
    public lootModel: LootModel,
    public loot: Loot = {},
  ) {

    // Generate loot
    console.log('Generating loot for ' + this.description + ' based on LootModel', this.lootModel);
    this.generateLoot(this.lootModel)
    console.log(this.loot);
  }

  generateLoot (lootModel: LootModel) {
    let range: number[] | undefined;
    let amount: number | undefined;
    let chance: boolean | undefined;

    range = lootModel[ResourceType.Science];
    if (range) {
      amount = randomIntFromInterval(range[0], range[1]);
      this.loot[ResourceType.Science] = amount;
    }

    range = lootModel[ResourceType.Common];
    if (range) {
      amount = randomIntFromInterval(range[0], range[1]);
      this.loot[ResourceType.Common] = amount;
    }

    range = lootModel[ResourceType.Uncommon];
    if (range) {
      amount = randomIntFromInterval(range[0], range[1]);
      chance = range[0] ? true : Math.random() < 0.5;
      if(chance && amount) {
        this.loot[ResourceType.Uncommon] = amount;
      }
    }

    range = lootModel[ResourceType.Rare];
    if (range) {
      amount = randomIntFromInterval(range[0], range[1]);
      chance = range[0] ? true : Math.random() < 0.2;
      if(chance && amount) {
        this.loot[ResourceType.Rare] = amount;
      }
    }
  }
}
