import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutineService } from '../../services/routines.service';
import { Routine } from '../../interfaces/routine.interface';
import { Exercise } from '../../interfaces/exercise.interface';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-routine-maker',
  templateUrl: './routine-maker.page.html',
  styleUrls: ['./routine-maker.page.scss'],
})
export class RoutineMakerPage implements OnInit {
  routineId: number = 0;
  routine: Routine = { id: 0, name: '', total_kcal: 0, description: '', type: '', exercises: [] };
  availableExercises: Exercise[] = [];
  routineExercises: Exercise[] = [];

  constructor(private route: ActivatedRoute, private routineService: RoutineService, private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.routineId = params['id'];
      this.loadRoutine();
      this.loadExercises();
    });
  }

  loadRoutine() {
    this.routineService.getRoutine(this.routineId).subscribe(
      (data: Routine) => {
        this.routine = data;
        console.log('Routine loaded:', this.routine);
        this.loadRoutineExercises(); // Cargar detalles completos de ejercicios
      },
      (error: any) => {
        console.error('Error fetching routine:', error);
      }
    );
  }

  loadExercises() {
    this.exerciseService.getExerciseList().subscribe(
      (data: Exercise[]) => {
        // Filtrar ejercicios disponibles que no están en la rutina
        this.availableExercises = data.filter(exercise => !this.routine.exercises.find(e => e.id === exercise.id));
      },
      (error: any) => {
        console.error('Error fetching exercises:', error);
      }
    );
  }

  loadRoutineExercises() {
    // Obtener detalles completos de los ejercicios en la rutina
    this.routineExercises = [];
    this.routine.exercises.forEach(exerciseId => {
        this.exerciseService.getExerciseDetail(exerciseId.toString()).subscribe( // Convertir ID a string
            (exercise: Exercise) => {
                this.routineExercises.push(exercise);
                console.log('Routine exercise:', exercise);
            },
            (error: any) => {
                console.error('Error fetching routine exercise:', error);
            }
        );
    });
}


  addExerciseToRoutine(exerciseId: number) {
    this.routineService.addExerciseToRoutine(this.routineId, exerciseId).subscribe(
      () => {
        this.loadRoutine(); // Recargar rutina después de agregar ejercicio
        this.loadExercises(); // Recargar ejercicios disponibles
      },
      (error: any) => {
        console.error('Error adding exercise to routine:', error);
      }
    );
  }

  removeExerciseFromRoutine(exerciseId: number) {
    this.routineService.removeExerciseFromRoutine(this.routineId, exerciseId).subscribe(
      () => {
        this.loadRoutine(); // Recargar rutina después de quitar ejercicio
        this.loadExercises(); // Recargar ejercicios disponibles
      },
      (error: any) => {
        console.error('Error removing exercise from routine:', error);
      }
    );
  }
}
