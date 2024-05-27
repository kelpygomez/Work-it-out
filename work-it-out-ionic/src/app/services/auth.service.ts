import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { tap } from 'rxjs/operators';
import { Profile } from '../interfaces/profile.interface';

const URLAPI = "http://127.0.0.1:8000/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/'; 
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(URLAPI + "account/login/", user).pipe(
      tap((response: any) => {
        const token = response.access; // Suponiendo que el token se llama "access" en la respuesta del servidor
        if (token) {
          this.saveToken(token); // Guardar el token en localStorage
        }
      })
    );
  }

  saveToken(token: string) {
    console.log('Token to be saved:', token);
    localStorage.setItem('token', token);
  }
  

  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log('Token retrieved:', token);
    return token;
  }

  register(user: any): Observable<any> {
    return this.http.post(URLAPI + "account/register/", user);
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    return this.http.post(URLAPI + "account/logout/", {});
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getUserIdFromToken(): Observable<number | null> {
    const token = this.getToken();
    if (token) {
      try {
        console.log('Token:', token); // Verificar el token recibido
        const decodedToken: any = jwtDecode(token);
        console.log('Decoded token:', decodedToken); // Verificar el token decodificado
        const userId = decodedToken.user_id;
        return of(userId);
      } catch (error) {
        console.error('Error decoding token:', error);
        return of(null);
      }
    } else {
      return of(null);
    }
  }
  getProfileData(userId: number): Observable<any> {
    return this.http.get<Profile[]>(`${this.apiUrl}account/profile/${userId}`);

  }
  updateProfile(id: number, profile: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}account/edit_profile/${id}/`, profile);
  }
  

  getAmountRoutines(userId: number): Observable<any> {
    return this.http.get<number>(`${this.apiUrl}account/routines_amount/${userId}`);
  }
}
