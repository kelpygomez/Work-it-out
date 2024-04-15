import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineMakerPage } from './routine-maker.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineMakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineMakerPageRoutingModule {}
