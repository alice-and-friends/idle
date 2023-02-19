import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {TabsPageModule} from "../tabs/tabs.module";
import {StellarObjectModule} from "../stellar-object/stellar-object.module";

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      Tab2PageRoutingModule,
      TabsPageModule,
      StellarObjectModule
    ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
