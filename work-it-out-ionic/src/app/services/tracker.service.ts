import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Week } from '../interfaces/tracker.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  private apiUrl = 'http://localhost:8000/weeks/'; 

  constructor(private http: HttpClient) {}

  getWeek(id: number): Observable<Week[]> {
    return this.http.get<Week[]>(`${this.apiUrl}${id}/`);
  }

  createWeek(): Observable<Week> {
    return this.http.post<Week[]>(`${this.apiUrl}${id}/`);
  }

  updateWeek(weekId: number, weekData: Week): Observable<Week> {
    return this.http.put<Week>(`${this.apiUrl}${weekId}/`, weekData);
  }

  deleteWeek(weekId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${weekId}/`);
  }
}

