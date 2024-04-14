// routine.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routine } from '../interfaces/routine.interface'; 

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  private apiUrl = 'http://localhost:8000/routines/'; 

  constructor(private http: HttpClient) { }

  getRutinas(userId: number): Observable<Routine[]> {
    return this.http.get<Routine[]>(`${this.apiUrl}?user_id=${userId}`);
  }

  updateRoutine(routine: Routine): Observable<Routine> {
    return this.http.put<Routine>(`${this.apiUrl}${routine.id}/`, routine);
  }

  getRoutine(id: number): Observable<Routine> {
    return this.http.get<Routine>(`${this.apiUrl}${id}/`);
  }

  createRoutine(userId: number): Observable<Routine> {
    return this.http.post<Routine>(`${this.apiUrl}create/`, { user_id: userId });
  }

  addExerciseToRoutine(routineId: number, exerciseId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${routineId}/add-exercise/`, { exercise_id: exerciseId });
  }

  removeExerciseFromRoutine(routineId: number, exerciseId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${routineId}/remove-exercise/`, { exercise_id: exerciseId });
  }
}
