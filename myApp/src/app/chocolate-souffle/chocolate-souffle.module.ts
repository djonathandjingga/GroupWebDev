import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChocolateSoufflePageRoutingModule } from './chocolate-souffle-routing.module';

import { ChocolateSoufflePage } from './chocolate-souffle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChocolateSoufflePageRoutingModule
  ],
  declarations: [ChocolateSoufflePage]
})
export class ChocolateSoufflePageModule {}
