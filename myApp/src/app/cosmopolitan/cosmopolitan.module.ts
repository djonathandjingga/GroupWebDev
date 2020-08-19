import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CosmopolitanPageRoutingModule } from './cosmopolitan-routing.module';

import { CosmopolitanPage } from './cosmopolitan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CosmopolitanPageRoutingModule
  ],
  declarations: [CosmopolitanPage]
})
export class CosmopolitanPageModule {}
