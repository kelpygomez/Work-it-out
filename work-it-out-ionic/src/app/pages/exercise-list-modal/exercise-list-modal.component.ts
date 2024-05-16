import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercise-list-modal',
  templateUrl: './exercise-list-modal.component.html',
  styleUrls: ['./exercise-list-modal.component.scss']
})
export class ExerciseListModalComponent {
  @Input() exercise: any;

  constructor() { }

  closeModal() {
    // Aquí debes agregar la lógica para cerrar el modal
  }
}
