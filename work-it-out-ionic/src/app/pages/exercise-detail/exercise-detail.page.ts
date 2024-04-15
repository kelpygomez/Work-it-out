import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {
  exercise: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exerciseService: ExerciseService
  ) {}

  ngOnInit() {
    // Obtener el ID del ejercicio de la URL
    const exerciseId = this.route.snapshot.paramMap.get('id');
  
    // Verificar si exerciseId no es nulo
    if (exerciseId !== null) {
      // Obtener los detalles del ejercicio usando el servicio
      this.exerciseService.getExerciseDetail(exerciseId).subscribe(
        (data: any) => {
           // Ajustar la URL de la imagen antes de asignarla a la propiedad exercise
          data.image = 'http://localhost:8000' + data.image;
          this.exercise = data;
        },
        (error: any) => {
          console.error('Error fetching exercise detail:', error);
        }
      );
    } else {
      console.error('Exercise ID is null.');
    }
  }
  returnToList() {
    // Redirigir manualmente a la página de la lista de ejercicios
    window.location.href = '/exercise-list';
  }
}
