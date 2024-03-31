// routine.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routine } from '../interfaces/routine.interface'; // Asegúrate de tener el modelo de rutina definido correctamente

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  private apiUrl = 'http://localhost:8000/routines/'; // Reemplaza esta URL con la URL de tu API de Django

  constructor(private http: HttpClient) { }

  getRutinas(): Observable<Routine[]> {
    return this.http.get<Routine[]>(this.apiUrl);
  }
  getCurrentRoutine(): Observable<Routine> {
    return this.http.get<Routine>(this.apiUrl + 'current');
  }

  updateRoutine(routine: Routine): Observable<Routine> {
    return this.http.put<Routine>(this.apiUrl + routine.id + '/', routine);
  }

  getRoutine(id: number): Observable<Routine> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.get<Routine>(url);
  }

  createRoutine(): Observable<Routine> {
    return this.http.post<Routine>(this.apiUrl, {});
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
