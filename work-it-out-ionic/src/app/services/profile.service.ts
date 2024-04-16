import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:8000/account/';
  private token: string | null;

  constructor(private http: HttpClient, private cookies: CookieService) {
    this.token = localStorage.getItem('token');
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : new HttpHeaders();
    return this.http.get<any>(`${this.baseUrl}profile/`, {headers: this.getHeaders()});
  }

  saveProfile(profile: Profile): Observable<any> {
    console.log(profile)
    return this.http.put<Profile>(`${this.baseUrl}profile/`, { "profile": profile }, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return headers;
  }
}
