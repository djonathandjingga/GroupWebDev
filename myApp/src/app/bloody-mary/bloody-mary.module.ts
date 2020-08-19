import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodyMaryPageRoutingModule } from './bloody-mary-routing.module';

import { BloodyMaryPage } from './bloody-mary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodyMaryPageRoutingModule
  ],
  declarations: [BloodyMaryPage]
})
export class BloodyMaryPageModule {}
