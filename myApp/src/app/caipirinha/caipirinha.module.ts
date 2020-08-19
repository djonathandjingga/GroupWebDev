import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaipirinhaPageRoutingModule } from './caipirinha-routing.module';

import { CaipirinhaPage } from './caipirinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaipirinhaPageRoutingModule
  ],
  declarations: [CaipirinhaPage]
})
export class CaipirinhaPageModule {}
