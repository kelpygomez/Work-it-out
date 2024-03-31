// routine-maker.page.ts

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
  exercises: Exercise[] = [];

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
      },
      (error: any) => {
        console.error('Error fetching routine:', error);
      }
    );
  }

  loadExercises() {
    this.exerciseService.getExerciseList().subscribe(
      (data: Exercise[]) => {
        this.exercises = data;
      },
      (error: any) => {
        console.error('Error fetching exercises:', error);
      }
    );
  }

  addExerciseToRoutine(exerciseId: number) {
    this.routineService.addExerciseToRoutine(this.routineId, exerciseId).subscribe(
      () => {
        this.loadRoutine(); // Reload routine after adding exercise
      },
      (error: any) => {
        console.error('Error adding exercise to routine:', error);
      }
    );
  }

  removeExerciseFromRoutine(exerciseId: number) {
    this.routineService.removeExerciseFromRoutine(this.routineId, exerciseId).subscribe(
      () => {
        this.loadRoutine(); // Reload routine after removing exercise
      },
      (error: any) => {
        console.error('Error removing exercise from routine:', error);
      }
    );
  }
}
