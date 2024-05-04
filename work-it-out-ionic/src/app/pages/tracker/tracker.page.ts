import { Component } from '@angular/core';
import { TrackerService } from '../../services/tracker.service';
import { AuthService } from '../../services/auth.service';
import { RoutineService } from '../../services/routines.service';
import { Week } from '../../interfaces/tracker.interface';
import { Routine } from '../../interfaces/routine.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage {
  userId: number | undefined;
  week: Week = {id:0, monday: null, tuesday: null, wednesday: null, thursday: null, friday: null, saturday: null, sunday:null,
  monday_date: "", tuesday_date:"", wednesday_date:"", thursday_date: "", friday_date: "", saturday_date:"",
  sunday_date: "", week_number:0, user: null};
  routines: Routine[] = [];
  selectedRoutineId = 0;

  constructor(private alertController: AlertController, private authService: AuthService, private routineService: RoutineService, private trackerService: TrackerService) { }

  ngOnInit() {
    // Obtener el ID del usuario al iniciar el componente
    this.getUserId();
    this.loadRoutines();
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
    if (this.userId) {
      this.trackerService.getCurrentWeek(this.userId).subscribe(
        (data: Week) => {
          this.week = data;
          console.log('Week loaded:', this.week);
        },
        (error: any) => {
          console.error('Error fetching profile:', error);
        }
      );
    }
  }

  loadPreviousWeek() {
    if (this.userId) {
      this.trackerService.getPreviousWeek(this.week.id).subscribe(
        (data: Week) => {
          this.week = data;
          console.log('Week loaded:', this.week);
        },
        (error: any) => {
          console.error('Error fetching profile:', error);
        }
      );
    }
  }

  loadUpcomingWeek() {
    if (this.userId) {
      this.trackerService.getNextWeek(this.week.id).subscribe(
        (data: Week) => {
          this.week = data;
          console.log('Week loaded:', this.week);
        },
        (error: any) => {
          console.error('Error fetching profile:', error);
        }
      );
    }
  }

  addRoutineToWeek(routineId:number, weekDay: string) {
    this.trackerService.addRoutineToWeek(this.week.id, routineId, weekDay).subscribe(
      () => {
      },
      (error: any) => {
        console.error('Error adding routine to the week:', error);
      }
    );
  }

  removeRoutineFromWeek(weekDay: string) {
    this.trackerService.removeRoutineFromWeek(this.week.id, weekDay).subscribe(
      () => {
      },
      (error: any) => {
        console.error('Error removing the routine from the week:', error);
      }
    );
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

  async addRoutine(weekDay: string) {
    // Verifica si se ha seleccionado una rutina
    if (!this.selectedRoutineId) {
      this.presentAlert('Error', 'Please select a routine.');
      return;
    }
  
    // Agrega la rutina seleccionada al día de la semana correspondiente
    this.addRoutineToWeek(this.selectedRoutineId, weekDay);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}