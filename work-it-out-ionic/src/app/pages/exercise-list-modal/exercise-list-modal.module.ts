import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ExerciseListModalComponent } from './exercise-list-modal.component';

@NgModule({
  declarations: [ExerciseListModalComponent],
  imports: [
    CommonModule,
    IonicModule  // Agrega esta línea para importar el módulo IonicModule
  ],
  exports: [ExerciseListModalComponent]
})
export class ExerciseListModalModule {}
