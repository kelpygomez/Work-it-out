import { Component, OnInit } from '@angular/core';
import { Routine } from '../../interfaces/routine.interface';
import { AuthService } from '../../services/auth.service';
import { RoutineService } from '../../services/routines.service';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.page.html',
  styleUrls: ['./routines-list.page.scss'],
})
export class RoutinesListPage implements OnInit {
  routines: Routine[] = [];
  userId: number | undefined;

  constructor(private authService: AuthService, private routineService: RoutineService) { }

  ngOnInit() {
    // Obtener el ID del usuario al iniciar el componente
    this.getUserId();
  }
  ionViewWillEnter() {
    // Se ejecuta cada vez que la página se carga o vuelve a cargarse
    this.loadRoutines();
  }
  getUserId() {
    // Obtener el token de autenticación
    const token = this.authService.getToken();
    console.log('Token obtenido:', token);

    if (token) {
      // Llamar al método en el servicio de autenticación para obtener el ID del usuario
      this.authService.getUserIdFromToken().subscribe(
        (userId: number | null) => {
          if (userId !== null) {
            // Asignar el ID del usuario al userId
            this.userId = userId;
            console.log('User ID obtenido:', this.userId);
            // Cargar las rutinas asociadas al usuario
            this.loadRoutines();
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

  loadRoutines() {
    // Verificar que el userId esté definido
    if (this.userId) {
      // Obtener las rutinas asociadas al usuario
      this.routineService.getRoutines(this.userId).subscribe(
        (data: Routine[]) => {
          this.routines = data;
          console.log('Rutinas cargadas:', this.routines);
        },
        (error: any) => {
          console.error('Error fetching routines:', error);
        }
      );
    } else {
      console.error('User ID not available.');
    }
  }

  deleteRoutine(routineId: number): void {
    this.routineService.deleteRoutine(routineId).subscribe(
      response => {
        console.log('Routine deleted successfully:', response);
        this.loadRoutines();
        // Aquí puedes actualizar la UI, por ejemplo, eliminar el elemento de una lista
      },
      error => {
        console.error('Error deleting routine:', error);
        // Maneja el error, por ejemplo, mostrando un mensaje al usuario
      }
    );
  }
}
