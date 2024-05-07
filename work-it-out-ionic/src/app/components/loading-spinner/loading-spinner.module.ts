import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingSpinnerPageRoutingModule } from './loading-spinner-routing.module';

import { LoadingSpinnerPage } from './loading-spinner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingSpinnerPageRoutingModule
  ],
  declarations: [LoadingSpinnerPage],
  exports: [LoadingSpinnerPage],
})
export class LoadingSpinnerPageModule {}
