import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.page.html',
  styleUrls: ['./exercise-list.page.scss'],
})
export class ExerciseListPage implements OnInit {
  exercises: any[] = [];
  filteredExercises: any[] = [];
  searchTerm: string = '';
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Llamar a la API para obtener la lista de ejercicios al inicializar la página
    this.http.get<any[]>('http://localhost:8000/exercises/').subscribe(
      (data: any[]) => {
        // Iterar sobre los ejercicios y ajustar la URL de la imagen
        data.forEach((exercise) => {
          exercise.image = 'http://localhost:8000' + exercise.image;
        });
        this.exercises = data;
        this.filteredExercises = data; // Inicializar la lista filtrada con todos los ejercicios
      },
      error => {
        console.error('Error fetching exercises:', error);
      }
    );
  }

  viewExerciseDetail(exerciseId: number) {
    // Redirigir a la página de detalle de ejercicio pasando el ID del ejercicio
    window.location.href = '/exercise-detail/' + exerciseId;
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
