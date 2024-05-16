import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseListPageRoutingModule } from './exercise-list-routing.module';

import { ExerciseListPage } from './exercise-list.page';
import { FooterPageModule } from 'src/app/components/footer/footer.module';
import { ExerciseListModalModule } from '../exercise-list-modal/exercise-list-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseListPageRoutingModule,
    ExerciseListModalModule
  ],
  declarations: [ExerciseListPage]
})
export class ExerciseListPageModule {}
