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
  }
  

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }

  logout() { 
    const user = localStorage.getItem('user');

    this.authService.logout().subscribe(
      response => {
        console.log('Logout succesful', this.user);
        localStorage.removeItem('user');
        this.router.navigate(['/home']);
      }
    )
  }
}
