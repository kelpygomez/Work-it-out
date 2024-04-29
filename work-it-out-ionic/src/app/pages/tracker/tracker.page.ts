import { Component } from '@angular/core';
import { TrackerService } from '../../services/tracker.service';
import { AuthService } from '../../services/auth.service';
import { RoutineService } from '../../services/routines.service';
import { Week } from '../../interfaces/tracker.interface';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage {
  userId: number | undefined;
  profile: Profile = { id: 0, username: '', email: '', birthdate: '', height: 0, weight: 0, status: '' };

  constructor(private authService: AuthService, private routineService: RoutineService, private trackerService: TrackerService) { }

  ngOnInit() {
    // Obtener el ID del usuario al iniciar el componente
    this.getUserId();
  }

  ionViewWillEnter() {
    // Se ejecuta cada vez que la página se carga o vuelve a cargarse
    this.loadWeek();
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
            // Cargar la semana asociada al usuario
            this.loadWeek();
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

  loadWeek() {
    // Verificar que el userId esté definido
    if (this.userId) {
      // Obtener las rutinas asociadas al usuario
      this.authService.getWeek(this.userId).subscribe(
        (data: Week) => {
          this.week = data;
          console.log('Week loaded:', this.week);
        },
        (error: any) => {
          console.error('Error fetching profile:', error);
        }
      );
    } else {
      console.error('User ID not available.');
    }
  }

}