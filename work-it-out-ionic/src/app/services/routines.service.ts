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
  private userIdUrl = 'http://localhost:8000/get-user-id/';

  constructor(private http: HttpClient) { }

  getUserId(): Observable<any> {
    return this.http.get<any>(this.userIdUrl);
  }

  getRutinas(userId: number): Observable<Routine[]> {
    return this.http.get<Routine[]>(`${this.apiUrl}?user_id=${userId}`);
  }

  updateRoutine(routine: Routine): Observable<Routine> {
    return this.http.put<Routine>(this.apiUrl + routine.id + '/', routine);
  }

  getRoutine(id: number): Observable<Routine> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.get<Routine>(url);
  }

  createRoutine(userId: number): Observable<any> {
    return this.http.post<Routine>(this.apiUrl + 'create/', { user_id: userId });
  }

  addExerciseToRoutine(routineId: number, exerciseId: number): Observable<any> {
    const url = `${this.apiUrl}${routineId}/add-exercise/`;
    return this.http.post<any>(url, { exercise_id: exerciseId });
  }

  removeExerciseFromRoutine(routineId: number, exerciseId: number): Observable<any> {
    const url = `${this.apiUrl}${routineId}/remove-exercise/`;
    return this.http.post<any>(url, { exercise_id: exerciseId });
  }
}
