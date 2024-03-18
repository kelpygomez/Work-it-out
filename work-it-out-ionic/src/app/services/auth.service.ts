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
    return this.http.post(URLAPI+"account/login/", user);
  }

  register(user: any): Observable<any> {
    return this.http.post(URLAPI+"account/register/", user);
  }

  getUser(id: any) {
    return this.http.get(URLAPI+"accounts/profile/", id)
  }

}
