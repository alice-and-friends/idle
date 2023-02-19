export class StellarObject {
  description: string;
  size: number;
  cssClass: string[];

  constructor(opts: any) {
    this.description = opts.description;
    this.size = opts.size // Planets go up to 70, Stars go up from 80 (except for pulsars)
    this.cssClass = opts.cssClass
  }
}
