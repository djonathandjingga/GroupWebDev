import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannaCottaPageRoutingModule } from './panna-cotta-routing.module';

import { PannaCottaPage } from './panna-cotta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannaCottaPageRoutingModule
  ],
  declarations: [PannaCottaPage]
})
export class PannaCottaPageModule {}
