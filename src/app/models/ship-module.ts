import {ResourceType} from "./resource";

export enum ShipModuleType {
  PowerCore, // Powers modules - upgrade gives more power
  ComputerCore, // Generates science - upgrade gives faster science
  SurgeDrive, // Moves the ship - upgrades make it go faster
  SurveyScanner, // Scans for resources - upgrades scan faster
  Harvester, // Collects resources - upgrades unlock more resource types
  Printer // Prints modules - upgrades unlock more printing projects
}
export interface IShipModuleLevels {
  type: ShipModuleType;
  levelsInfo: {
    researchCost: (number|null)[],
    powerGridUsage: number[],
    printerLevelRequired: (number|null)[],
    printingCost: { [key in ResourceType]? : number[] }
  };
}
export class ShipModule {
  type: ShipModuleType;
  level: number;

  constructor(opts: any) {
    this.type = opts.type;
    this.level = opts.level;
  }

  label() {
    return `${this.type} Mark` + this.level;
  }
}
const powerUseModels = {
  high:     [20, 50, 100, 300, 600],
  standard: [10, 25, 50, 100, 200],
  none:     [0, 0, 0, 0, 0],
}
const printerUseModels = {
  trivial:    [null, 1, 1, 1, 1],
  bootstrap:  [null, 1, 2, 3, 4],
  cliff:      [null, 1, 2, 4, 5],
  standard:   [null, 2, 3, 4, 5],
}
const researchCostModels = {
  tier1: [null, 100, 10000, 100000, 200000],
  tier2: [null, 100, 12500, 125000, 250000],
  tier3: [null, 100, 15000, 150000, 300000],
}
export const shipModuleLevels: IShipModuleLevels[] = [
  {
    type: ShipModuleType.PowerCore,
    levelsInfo: {
      researchCost: researchCostModels.tier3,
      powerGridUsage: powerUseModels.none,
      printerLevelRequired: printerUseModels.trivial,
      printingCost: {
        [ResourceType.Science]: [0, 100,	15000,	150000,	300000]
      }
    }
  },
  {
    type: ShipModuleType.ComputerCore,
    levelsInfo: {
      researchCost: researchCostModels.tier3,
      powerGridUsage: powerUseModels.high,
      printerLevelRequired: printerUseModels.cliff,
      printingCost: {
        [ResourceType.Science]: [0, 100,	15000,	150000,	300000]
      }
    }
  },
  {
    type: ShipModuleType.SurgeDrive,
    levelsInfo: {
      researchCost: researchCostModels.tier2,
      powerGridUsage: powerUseModels.standard,
      printerLevelRequired: printerUseModels.standard,
      printingCost: {
        [ResourceType.Science]: [0, 100,	15000,	150000,	300000]
      }
    }
  },
  {
    type: ShipModuleType.SurveyScanner,
    levelsInfo: {
      researchCost: researchCostModels.tier2,
      powerGridUsage: powerUseModels.standard,
      printerLevelRequired: printerUseModels.standard,
      printingCost: {
        [ResourceType.Science]: [0, 100,	15000,	150000,	300000]
      }
    }
  },
  {
    type: ShipModuleType.Harvester,
    levelsInfo: {
      researchCost: researchCostModels.tier1,
      powerGridUsage: powerUseModels.standard,
      printerLevelRequired: printerUseModels.standard,
      printingCost: {
        [ResourceType.Science]: [0, 100,	15000,	150000,	300000]
      }
    }
  },
  {
    type: ShipModuleType.Printer,
    levelsInfo: {
      researchCost: researchCostModels.tier1,
      powerGridUsage: powerUseModels.standard,
      printerLevelRequired: printerUseModels.bootstrap,
      printingCost: {
        [ResourceType.Science]: [0, 100,	15000,	150000,	300000]
      }
    }
  },
]
