import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { RoutineService } from '../../services/routines.service';
import { Routine } from '../../interfaces/routine.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  user: User | null = null;
  userId = 0;
  routine: Routine = { id: 0, name: '', total_kcal: 0, description: '', types: '', exercises: [] };
  constructor(private authService: AuthService, private router: Router, private routineService: RoutineService) { }

  ngOnInit() {
    this.getUserId();
  }
  
  getUserId() {
    // Obtener el token de autenticación
    const token = this.authService.getToken();

    if (token) {
      // Llamar al método en el servicio de autenticación para obtener el ID del usuario
      this.authService.getUserIdFromToken().subscribe(
        (userId: number | null) => {
          if (userId !== null) {
            // Asignar el ID del usuario al userId
            this.userId = userId;
          } else {
            console.error('Error: User ID is null.');
          }
        },
        (error: any) => {
          console.error('Error fetching user ID from token:', error);
        }
      );
    } else {
      console.error('Token not available.');
    }
  }

  createEmptyRoutine() {
    console.log(this.userId);
    this.routineService.createRoutine(this.userId).subscribe(
      (data: Routine) => {
        this.routine = data;
        let routineId = this.routine.id;
        let url = `/routine-maker/${routineId}`;
        this.router.navigate([url]);
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

    this.authService.logout().subscribe(
      response => {
        console.log('Logout succesful', this.user);
        localStorage.removeItem('user');
        this.router.navigate(['/home']);
      }
    )
  }
}
