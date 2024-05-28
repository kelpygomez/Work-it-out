import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiCalculatorPageRoutingModule } from './bmi-calculator-routing.module';

import { BmiCalculatorPage } from './bmi-calculator.page';
import { LoadingSpinnerPageModule } from 'src/app/components/loading-spinner/loading-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiCalculatorPageRoutingModule,
    LoadingSpinnerPageModule
  ],
  declarations: [BmiCalculatorPage]
})
export class BmiCalculatorPageModule {}
