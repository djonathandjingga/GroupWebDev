import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaiTaiPageRoutingModule } from './mai-tai-routing.module';

import { MaiTaiPage } from './mai-tai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaiTaiPageRoutingModule
  ],
  declarations: [MaiTaiPage]
})
export class MaiTaiPageModule {}
