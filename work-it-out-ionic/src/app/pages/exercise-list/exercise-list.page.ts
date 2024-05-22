import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ExerciseListModalComponent } from '../exercise-list-modal/exercise-list-modal.component';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.page.html',
  styleUrls: ['./exercise-list.page.scss'],
})
export class ExerciseListPage implements OnInit {
  exercises: any[] = [];
  filteredExercises: any[] = [];
  searchTerm: string = '';
  selectedExercise: any; // Ejercicio seleccionado
  isModalOpen = false; // Indica si el modal está abierto
  
  constructor(
    private http: HttpClient, 
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // Llamar a la API para obtener la lista de ejercicios al inicializar la página
    this.http.get<any[]>('http://api.workitout.arkania.es/exercises/').subscribe(
      (data: any[]) => {
        // Iterar sobre los ejercicios y ajustar la URL de la imagen
        data.forEach((exercise) => {
          exercise.image = 'http://api.workitout.arkania.es' + exercise.image;
        });
        this.exercises = data;
        this.filteredExercises = data; // Inicializar la lista filtrada con todos los ejercicios
      },
      error => {
        console.error('Error fetching exercises:', error);
      }
    );
  }

  async openExerciseModal(exercise: any) {
    this.selectedExercise = exercise;
    this.isModalOpen = true;
    // Implementación del modal directamente sin ExerciseModalPage
    const modal = await this.modalController.create({
      component: ExerciseListModalComponent, // Cambia ExerciseListPage por ExerciseListModalComponent
      cssClass: 'exercise-modal',
      componentProps: {
        'exercise': this.selectedExercise
      }
    });
    await modal.present();
  }


  // Método para cerrar el modal
  closeExerciseModal() {
    this.isModalOpen = false;
    this.selectedExercise = null;
    this.modalController.dismiss();
  }
  
  filterExercises(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredExercises = this.exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      exercise.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      exercise.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  exerciseTypes = [
    { value: 'LEG', label: 'Leg' },
    { value: 'BI', label: 'Biceps' },
    { value: 'TRI', label: 'Triceps' },
    { value: 'CHE', label: 'Chest' },
    { value: 'BA', label: 'Back' },
    { value: 'SHO', label: 'Shoulders' }
  ];
  selectedType!: string; // Tipo seguido de !
  
  filterExercisesByType() {
    if (!this.selectedType) {
      this.filteredExercises = this.exercises;
    } else {
      this.filteredExercises = this.exercises.filter(exercise => exercise.type === this.selectedType);
    }
  }
}
