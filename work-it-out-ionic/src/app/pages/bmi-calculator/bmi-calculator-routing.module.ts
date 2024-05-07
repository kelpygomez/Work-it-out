import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiCalculatorPage } from './bmi-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: BmiCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiCalculatorPageRoutingModule {}
