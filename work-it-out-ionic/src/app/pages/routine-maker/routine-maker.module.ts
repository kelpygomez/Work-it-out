import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutineMakerPageRoutingModule } from './routine-maker-routing.module';

import { RoutineMakerPage } from './routine-maker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutineMakerPageRoutingModule
  ],
  declarations: [RoutineMakerPage]
})
export class RoutineMakerPageModule {}
