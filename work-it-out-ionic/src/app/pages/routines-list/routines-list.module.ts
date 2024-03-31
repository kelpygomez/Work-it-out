import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutinesListPageRoutingModule } from './routines-list-routing.module';

import { RoutinesListPage } from './routines-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutinesListPageRoutingModule
  ],
  declarations: [RoutinesListPage]
})
export class RoutinesListPageModule {}
