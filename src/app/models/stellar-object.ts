export class StellarObject {
  description: string;
  size: number;
  cssClass: string[];
  interactive: boolean = false;
  requiredTech: number = 1;

  constructor(opts: any) {
    this.description = opts.description;
    this.size = opts.size // Planets go up to 70, Stars go up from 80 (except for pulsars)
    this.cssClass = opts.cssClass
    this.interactive = opts.interactive;
    if(opts.requiredTech) this.requiredTech = opts.requiredTech;
  }
}
