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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Llamar a la API para obtener la lista de ejercicios al inicializar la página
    this.http.get<any[]>('http://localhost:8000/exercises/').subscribe(
      data => {
        this.exercises = data;
      },
      error => {
        console.error('Error fetching exercises:', error);
      }
    );
  }

  viewExerciseDetail(exerciseId: number) {
    // Redirigir a la página de detalle de ejercicio pasando el ID del ejercicio
    this.router.navigate(['/exercise-detail', exerciseId]);
  }
}

