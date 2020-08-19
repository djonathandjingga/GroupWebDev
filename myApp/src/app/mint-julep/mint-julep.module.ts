import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MintJulepPageRoutingModule } from './mint-julep-routing.module';

import { MintJulepPage } from './mint-julep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MintJulepPageRoutingModule
  ],
  declarations: [MintJulepPage]
})
export class MintJulepPageModule {}
