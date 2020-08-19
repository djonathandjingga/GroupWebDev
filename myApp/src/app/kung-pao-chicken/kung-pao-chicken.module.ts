import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KungPaoChickenPageRoutingModule } from './kung-pao-chicken-routing.module';

import { KungPaoChickenPage } from './kung-pao-chicken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KungPaoChickenPageRoutingModule
  ],
  declarations: [KungPaoChickenPage]
})
export class KungPaoChickenPageModule {}
