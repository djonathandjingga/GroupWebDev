import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButterChickenPageRoutingModule } from './butter-chicken-routing.module';

import { ButterChickenPage } from './butter-chicken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButterChickenPageRoutingModule
  ],
  declarations: [ButterChickenPage]
})
export class ButterChickenPageModule {}
