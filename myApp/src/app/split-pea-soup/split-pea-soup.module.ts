import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitPeaSoupPageRoutingModule } from './split-pea-soup-routing.module';

import { SplitPeaSoupPage } from './split-pea-soup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplitPeaSoupPageRoutingModule
  ],
  declarations: [SplitPeaSoupPage]
})
export class SplitPeaSoupPageModule {}
