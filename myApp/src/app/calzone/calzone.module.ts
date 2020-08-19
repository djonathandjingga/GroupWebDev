import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalzonePageRoutingModule } from './calzone-routing.module';

import { CalzonePage } from './calzone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalzonePageRoutingModule
  ],
  declarations: [CalzonePage]
})
export class CalzonePageModule {}
