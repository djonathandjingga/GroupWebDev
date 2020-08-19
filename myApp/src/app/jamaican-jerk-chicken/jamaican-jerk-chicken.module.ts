import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JamaicanJerkChickenPageRoutingModule } from './jamaican-jerk-chicken-routing.module';

import { JamaicanJerkChickenPage } from './jamaican-jerk-chicken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JamaicanJerkChickenPageRoutingModule
  ],
  declarations: [JamaicanJerkChickenPage]
})
export class JamaicanJerkChickenPageModule {}
