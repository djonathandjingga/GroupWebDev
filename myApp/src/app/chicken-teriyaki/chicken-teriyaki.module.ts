import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChickenTeriyakiPageRoutingModule } from './chicken-teriyaki-routing.module';

import { ChickenTeriyakiPage } from './chicken-teriyaki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChickenTeriyakiPageRoutingModule
  ],
  declarations: [ChickenTeriyakiPage]
})
export class ChickenTeriyakiPageModule {}
