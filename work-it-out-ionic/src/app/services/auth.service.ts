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
    return this.http.post(URLAPI+"account/login/", user);
  }

  register(user: any): Observable<any> {
    return this.http.post(URLAPI+"account/register/", user);
  }

  getUser(id: any) {
    return this.http.get(URLAPI+"account/profile/", id)
  }

  logout(user: any) {
    console.log(user)
    return this.http.post(URLAPI+"account/logout/", user);
  }

  getUserId(username: string): Observable<any> {
    return this.http.get<any>(URLAPI + `get-user-id/${username}`);
}

  getUsername() {
   const userString = localStorage.getItem('user');
   if (userString) {
    const user = JSON.parse(userString);
    return user.username;
}
  }
  getUserData(): Observable<{ username: string, user_id: number }> {
    return new Observable(observer => {
      const username = this.getUsername();
      if (username) {
        this.getUserId(username).subscribe(
          (user_id: number) => {
            observer.next({ username, user_id });
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Username not found.');
      }
    });
  }
}

