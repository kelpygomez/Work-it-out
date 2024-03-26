import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'http://localhost:8000/exercises/';

  constructor(private http: HttpClient) {}

  getExerciseList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getExerciseDetail(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }
}
