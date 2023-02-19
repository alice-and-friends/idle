import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StellarObjectComponent} from "./stellar-object.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [StellarObjectComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    StellarObjectComponent
  ]
})
export class StellarObjectModule { }
