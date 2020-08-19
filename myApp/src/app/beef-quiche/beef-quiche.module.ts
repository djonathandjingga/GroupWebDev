import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeefQuichePageRoutingModule } from './beef-quiche-routing.module';

import { BeefQuichePage } from './beef-quiche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeefQuichePageRoutingModule
  ],
  declarations: [BeefQuichePage]
})
export class BeefQuichePageModule {}
