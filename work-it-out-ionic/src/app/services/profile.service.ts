import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:8000/account/';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}profile/`);
  }

  saveProfile(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}profile/edit/`, formData);
  }
}
