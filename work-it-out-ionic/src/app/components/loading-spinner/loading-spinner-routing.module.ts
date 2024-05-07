import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingSpinnerPage } from './loading-spinner.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingSpinnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingSpinnerPageRoutingModule {}
