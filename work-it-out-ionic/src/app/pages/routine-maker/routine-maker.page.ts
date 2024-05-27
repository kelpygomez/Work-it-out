import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutineService } from '../../services/routines.service';
import { Routine } from '../../interfaces/routine.interface';
import { Exercise } from '../../interfaces/exercise.interface';
import { ExerciseService } from 'src/app/services/exercise.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-routine-maker',
  templateUrl: './routine-maker.page.html',
  styleUrls: ['./routine-maker.page.scss'],
})
export class RoutineMakerPage implements OnInit {
  userId: number = 0;
  routineId: number = 0;
  routine: Routine = { id: 0, name: '', total_kcal: 0, description: '', types: '', required_materials:'', exercises: [] };
  availableExercises: Exercise[] = [];
  routineExercises: Exercise[] = [];
  filteredExercises: any[] = [];
  searchTerm: string = '';
  isLoading: boolean = true;
  selectedType!: string;
  selectedMaterial!: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private routineService: RoutineService, private exerciseService: ExerciseService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 30);
    this.route.params.subscribe(params => {
      this.routineId = params['id'];
      this.loadRoutine();
      this.loadExercises();
      this.getUserId();
    });
  }

  getUserId() {
    this.http.get<any>('/get-user-id/').subscribe(
      (data) => {
        this.userId = data.user_id;
        console.log('User ID:', this.userId);
      },
      (error) => {
        console.error('Error fetching user ID:', error);
      }
    );
  }

  loadRoutine() {
    this.routineService.getRoutine(this.routineId).subscribe(
      (data: Routine) => {
        this.routine = data;
        console.log('Routine loaded:', this.routine);
      },
      (error: any) => {
        console.error('Error fetching routine:', error);
      }
    );
  }

  loadExercises() {
    this.exerciseService.getExerciseList().subscribe(
      (data: Exercise[]) => {
        this.availableExercises = data.filter(exercise => !this.routine.exercises.find(e => e.id === exercise.id));
        this.filteredExercises = this.availableExercises;
      },
      (error: any) => {
        console.error('Error fetching exercises:', error);
      }
    );
  }

  toggleExercise(exercise: Exercise) {
    if (this.isExerciseInRoutine(exercise.id)) {
      this.removeExerciseFromRoutine(exercise.id);
    } else {
      this.addExerciseToRoutine(exercise.id);
    }
  }

  addExerciseToRoutine(exerciseId: number) {
    this.routineService.addExerciseToRoutine(this.routineId, exerciseId).subscribe(
      () => {
        this.saveChanges();
        this.loadRoutine();
        this.loadExercises();
      },
      (error: any) => {
        console.error('Error adding exercise to routine:', error);
      }
    );
  }

  removeExerciseFromRoutine(exerciseId: number) {
    this.routineService.removeExerciseFromRoutine(this.routineId, exerciseId).subscribe(
      () => {
        this.saveChanges();
        this.loadRoutine();
        this.loadExercises();
      },
      (error: any) => {
        console.error('Error removing exercise from routine:', error);
      }
    );
  }

  saveChanges() {
    const data = {
      id: this.routine.id,
      name: this.routine.name,
      description: this.routine.description
    };
    this.routineService.updateRoutine(data).subscribe(
      () => {
        console.log('Changes saved successfully');
      },
      (error: any) => {
        console.error('Error saving changes:', error);
      }
    );
  }

  filterExercises(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredExercises = this.availableExercises.filter(exercise =>
      exercise.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      exercise.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      exercise.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filterExercisesSelect() {
    this.filteredExercises = this.availableExercises;
    if (this.selectedType) {
      this.filteredExercises = this.filteredExercises.filter(exercise => exercise.type === this.selectedType);
    }
    if (this.selectedMaterial) {
      this.filteredExercises = this.filteredExercises.filter(exercise => exercise.required_material === this.selectedMaterial);
    }
  }

  isExerciseInRoutine(exerciseId: number): boolean {
    return !!this.routine.exercises.find(exercise => exercise.id === exerciseId);
  }
}
