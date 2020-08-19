import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrenchToastPageRoutingModule } from './french-toast-routing.module';

import { FrenchToastPage } from './french-toast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrenchToastPageRoutingModule
  ],
  declarations: [FrenchToastPage]
})
export class FrenchToastPageModule {}
