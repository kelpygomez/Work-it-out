import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

const URLAPI = "http://127.0.0.1:8000/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any>{
    localStorage.setItem('user', JSON.stringify(user));
    return this.http.post(URLAPI+"account/user/login/", user);
  }

  register(user: any): Observable<any> {
    return this.http.post(URLAPI+"account/user/register/", user);
  }

  getProfile(profile_id: any): Observable<any> {
    // Obtener el token de autenticación del localStorage o de donde lo tengas almacenado
    const authToken = localStorage.getItem('authToken');

    // Crear el encabezado de autorización con el token
    const headers = { Authorization: `Bearer ${authToken}` };

    // Hacer la solicitud GET para obtener el perfil del usuario
    return this.http.get(`${URLAPI}account/profile-detail/${profile_id}`, { headers });
  }
  logout(user: any) {
    console.log(user)
    return this.http.post(URLAPI+"account/logout/", user);
  }

}
