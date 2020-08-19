import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChocolateChipCookiePageRoutingModule } from './chocolate-chip-cookie-routing.module';

import { ChocolateChipCookiePage } from './chocolate-chip-cookie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChocolateChipCookiePageRoutingModule
  ],
  declarations: [ChocolateChipCookiePage]
})
export class ChocolateChipCookiePageModule {}
