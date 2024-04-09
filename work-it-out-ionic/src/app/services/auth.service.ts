import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { tap } from 'rxjs/operators';
import { Profile } from '../interfaces/profile.interface';

const URLAPI = "http://127.0.0.1:8000/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null;

  constructor(private http: HttpClient, private cookies: CookieService) {
    this.token = localStorage.getItem('token');
  }
  
  login(user: any): Observable<any> {
    return this.http.post<any>(`${URLAPI}account/user/login/`, { user }).pipe(
      tap(response => {
        this.token = response.access;
        localStorage.setItem('token', this.token as string);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(response)
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post(URLAPI+"account/user/register/", user);
  }

  getProfile(): Observable<any> {
    // Obtener el token de autenticación del localStorage o de donde lo tengas almacenado
    const authToken = localStorage.getItem('token');

    // Crear el encabezado de autorización con el token
    const headers = { Authorization: `Bearer ${authToken}` };

    // Hacer la solicitud GET para obtener el perfil del usuario
    return this.http.get(`${URLAPI}account/profile`, { headers: this.getHeaders() });
  }

  saveProfile(profile: Profile): Observable<any> {
    return this.http.put<Profile>(`${URLAPI}account/profile/`, { profile }, { headers: this.getHeaders() });
  }

  
  logout(user: any) {
    console.log(user)
    return this.http.post(URLAPI+"account/logout/", user);
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
