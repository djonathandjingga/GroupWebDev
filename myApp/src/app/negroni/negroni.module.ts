import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegroniPageRoutingModule } from './negroni-routing.module';

import { NegroniPage } from './negroni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegroniPageRoutingModule
  ],
  declarations: [NegroniPage]
})
export class NegroniPageModule {}
