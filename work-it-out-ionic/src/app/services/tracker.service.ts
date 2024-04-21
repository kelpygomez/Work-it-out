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

  // Método para obtener todos los registros del rastreador
  getTracker(): Observable<Week[]> {
    return this.http.get<Week[]>(this.apiUrl);
  }

  // Método para crear un nuevo registro en el rastreador
  createTracker(trackerData: Week): Observable<Week> {
    return this.http.post<Week>(this.apiUrl, trackerData);
  }

  // Método para actualizar un registro existente en el rastreador
  updateTracker(trackerId: number, trackerData: Week): Observable<Week> {
    return this.http.put<Week>(`${this.apiUrl}${trackerId}/`, trackerData);
  }

  // Método para eliminar un registro del rastreador
  deleteTracker(trackerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${trackerId}/`);
  }
}

