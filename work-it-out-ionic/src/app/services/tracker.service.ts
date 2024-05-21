import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Week } from '../interfaces/tracker.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  private apiUrl = 'http://api.workitout.arkania.es/weeks/'; 

  constructor(private http: HttpClient) {}

  getCurrentWeek(user_id:number): Observable<any> {
    return this.http.get<Week[]>(`${this.apiUrl}current/${user_id}/`);
  }

  getNextWeek(week_id:number): Observable<any> {
    return this.http.get<Week[]>(`${this.apiUrl}upcoming/${week_id}/`);
  }

  getPreviousWeek(week_id:number): Observable<any> {
    return this.http.get<Week[]>(`${this.apiUrl}previous/${week_id}/`);
  }

  addRoutineToWeek(week_id: number, routineId: number, weekDay: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${week_id}/add-routine/`, { routineId: routineId, weekDay: weekDay});
  }

  removeRoutineFromWeek(week_id: number, weekDay: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${week_id}/remove-routine/`, { weekDay: weekDay });
  }

}

