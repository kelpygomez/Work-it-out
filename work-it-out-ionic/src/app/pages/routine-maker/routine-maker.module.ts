import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutineMakerPageRoutingModule } from './routine-maker-routing.module';

import { RoutineMakerPage } from './routine-maker.page';
import { LoadingSpinnerPageModule } from 'src/app/components/loading-spinner/loading-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutineMakerPageRoutingModule,
    LoadingSpinnerPageModule
  ],
  declarations: [RoutineMakerPage]
})
export class RoutineMakerPageModule {}
