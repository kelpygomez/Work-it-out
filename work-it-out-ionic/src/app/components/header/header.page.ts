import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { RoutineService } from '../../services/routines.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  user: User | null = null;
  constructor(private authService: AuthService, private router: Router, private routineService: RoutineService) { }

  ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString) as User;
      console.log(this.user)
    }
  }

  createEmptyRoutine() {
    this.routineService.createRoutine().subscribe(
      (data: any) => {
        // Una vez creada la rutina, redirige a la página de Routine Maker con el ID de la nueva rutina
        this.router.navigate(['/routine-maker', data.id]);
      },
      (error: any) => {
        console.error('Error creating empty routine:', error);
      }
    );
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }

  logout() { 
    const user = localStorage.getItem('user');

    this.authService.logout(user).subscribe(
      response => {
        console.log('Logout succesful', this.user);
        localStorage.removeItem('user');
        this.router.navigate(['/home']);
      }
    )
  }

}
