import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PommesAnnaPageRoutingModule } from './pommes-anna-routing.module';

import { PommesAnnaPage } from './pommes-anna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PommesAnnaPageRoutingModule
  ],
  declarations: [PommesAnnaPage]
})
export class PommesAnnaPageModule {}
