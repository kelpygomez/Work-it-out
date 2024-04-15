import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routine } from '../interfaces/routine.interface'; 
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  private apiUrl = 'http://localhost:8000/routines/'; 

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  private getRequestOptions(): { headers: HttpHeaders } {
    return { headers: this.getHeaders() };
  }

  getRoutines(userId: number): Observable<Routine[]> {
    console.log('User ID:', userId); // Agregar console log para el userId
    return this.http.get<Routine[]>(`${this.apiUrl}user/${userId}`, this.getRequestOptions());
  }
  
  updateRoutine(routine: Routine): Observable<Routine> {
    return this.http.put<Routine>(`${this.apiUrl}${routine.id}/`, routine, this.getRequestOptions());
  }

  getRoutine(id: number): Observable<Routine> {
    return this.http.get<Routine>(`${this.apiUrl}${id}/`, this.getRequestOptions());
  }

  createRoutine(userId: number): Observable<Routine> {
    return this.http.post<Routine>(`${this.apiUrl}create/`, {}, this.getRequestOptions());
  }

  addExerciseToRoutine(routineId: number, exerciseId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${routineId}/add-exercise/`, { exercise_id: exerciseId }, this.getRequestOptions());
  }

  removeExerciseFromRoutine(routineId: number, exerciseId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${routineId}/remove-exercise/`, { exercise_id: exerciseId }, this.getRequestOptions());
  }
}
