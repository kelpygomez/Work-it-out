import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiCalculatorPageRoutingModule } from './bmi-calculator-routing.module';

import { BmiCalculatorPage } from './bmi-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiCalculatorPageRoutingModule
  ],
  declarations: [BmiCalculatorPage]
})
export class BmiCalculatorPageModule {}
