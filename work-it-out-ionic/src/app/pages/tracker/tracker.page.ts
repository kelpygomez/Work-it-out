import { Component } from '@angular/core';
import { TrackerService } from '../../services/tracker.service';
import { AuthService } from '../../services/auth.service';
import { RoutineService } from '../../services/routines.service';
import { Week } from '../../interfaces/tracker.interface';
import { Routine } from '../../interfaces/routine.interface';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';

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
  selectedRoutineId1 = 0;
  selectedRoutineId2 = 0;
  selectedRoutineId3 = 0;
  selectedRoutineId4 = 0;
  selectedRoutineId5 = 0;
  selectedRoutineId6 = 0;
  selectedRoutineId7 = 0;


  constructor(private alertController: AlertController, private authService: AuthService, private routineService: RoutineService, private trackerService: TrackerService) { }

  ngOnInit() {
    // Obtener el ID del usuario al iniciar el componente
    this.getUserId();
    this.loadRoutines();
  }

  ionViewWillEnter() {
    // Se ejecuta cada vez que la página se carga o vuelve a cargarse
    this.loadRoutines();
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
        Swal.fire({
          title: 'Success!',
          text: 'Routine added to this day.',
          icon: 'success',
          confirmButtonColor: "#1d965b",

        });
        this.loadWeek();
      },
      (error: any) => {
        console.error('Error adding routine to the week:', error);
      }
    );
  }

  removeRoutineFromWeek(weekDay: string) {
    this.trackerService.removeRoutineFromWeek(this.week.id, weekDay).subscribe(
      () => {
        Swal.fire({
          title: 'Success!',
          text: 'Routine removed from this day!!',
          icon: 'success',
          confirmButtonColor: "#1d965b",

        });
        this.loadWeek();
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

  async addRoutineMonday() {
    if (!this.selectedRoutineId1) {
      this.presentAlert('Error', 'Please select a routine.');
      return;
    }
  
    this.addRoutineToWeek(this.selectedRoutineId1, 'monday');
  }
  
  async addRoutineTuesday() {
    if (!this.selectedRoutineId2) {
      this.presentAlert('Error', 'Please select a routine.');
      return;
    }
  
    this.addRoutineToWeek(this.selectedRoutineId2, 'tuesday');
  }
  
  async addRoutineWednesday() {
    if (!this.selectedRoutineId3) {
      this.presentAlert('Error', 'Please select a routine.');
      return;
    }
  
    this.addRoutineToWeek(this.selectedRoutineId3, 'wednesday');
  }
  
  async addRoutineThursday() {
    if (!this.selectedRoutineId4) {
      this.presentAlert('Error', 'Please select a routine.');
      return;
    }
  
    this.addRoutineToWeek(this.selectedRoutineId4, 'thursday');
  }
  
  async addRoutineFriday() {
    if (!this.selectedRoutineId5) {
      this.presentAlert('Error', 'Please select a routine.');
      return;
    }
  
    this.addRoutineToWeek(this.selectedRoutineId5, 'friday');
  }
  
  async addRoutineSaturday() {
    if (!this.selectedRoutineId6) {
      this.presentAlert('Error', 'Please select a routine.');
      return;
    }
  
    this.addRoutineToWeek(this.selectedRoutineId6, 'saturday');
  }
  
  async addRoutineSunday() {
    if (!this.selectedRoutineId7) {
      this.presentAlert('Error', 'Please select a routine.');
      return;
    }
  
    this.addRoutineToWeek(this.selectedRoutineId7, 'sunday');
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