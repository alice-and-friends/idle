export enum ShipModuleType {
  Printer,
  Engine
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
