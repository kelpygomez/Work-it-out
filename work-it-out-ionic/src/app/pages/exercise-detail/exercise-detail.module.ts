import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseDetailPageRoutingModule } from './exercise-detail-routing.module';

import { ExerciseDetailPage } from './exercise-detail.page';
import { FooterPageModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseDetailPageRoutingModule
  ],
  declarations: [ExerciseDetailPage]
})
export class ExerciseDetailPageModule {}
