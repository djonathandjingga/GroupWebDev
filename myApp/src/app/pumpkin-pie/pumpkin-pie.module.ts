import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PumpkinPiePageRoutingModule } from './pumpkin-pie-routing.module';

import { PumpkinPiePage } from './pumpkin-pie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PumpkinPiePageRoutingModule
  ],
  declarations: [PumpkinPiePage]
})
export class PumpkinPiePageModule {}
