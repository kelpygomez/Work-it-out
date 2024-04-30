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

  getCurrentWeek(): Observable<any> {
    return this.http.get<Week[]>(`${this.apiUrl}current/`);
  }

  getNextWeek(id:number): Observable<any> {
    return this.http.get<Week[]>(`${this.apiUrl}/upcoming/${id}/`);
  }

  getPreviousWeek(id:number): Observable<any> {
    return this.http.get<Week[]>(`${this.apiUrl}/previous/${id}/`);
  }

  updateWeek(weekId: number, weekData: Week): Observable<any> {
    return this.http.put<Week>(`${this.apiUrl}${weekId}/`, weekData);
  }

}

