import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Profile } from 'src/app/interfaces/profile.interface';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userId: number | undefined;
  profile: Profile = { id: 0, username: '', email: '', birthdate: '', height: 0, weight: 0, status: '', photo:"" };
  routines_amount = 0;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Obtener el ID del usuario al iniciar el componente
    this.getUserId();
  }

  ionViewWillEnter() {
    // Se ejecuta cada vez que la página se carga o vuelve a cargarse
    this.loadProfile();
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
            // Cargar las rutinas asociadas al usuario
            this.getAmountRoutines();
            this.loadProfile();
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

  loadProfile() {
    // Verificar que el userId esté definido
    if (this.userId) {
      // Obtener las rutinas asociadas al usuario
      this.authService.getProfileData(this.userId).subscribe(
        (data: Profile) => {
          // Ajustar la URL de la imagen
          if (data.photo) {
            data.photo = 'http://127.0.0.1:8000' + data.photo;
          }
          this.profile = data;
          console.log('Profile loaded:', this.profile);
        },
        (error: any) => {
          console.error('Error fetching profile:', error);
        }
      );
    } else {
      console.error('User ID not available.');
    }
  }
  
  getAmountRoutines() {
    // Verificar que el userId esté definido
    if (this.userId) {
      // Obtener las rutinas asociadas al usuario
      this.authService.getAmountRoutines(this.userId).subscribe(
        (data) => {
          this.routines_amount = data.amount_routines;
          console.log('Number of routines obtained:', this.routines_amount);
        },
        (error: any) => {
          console.error('Error fetching number of routines:', error);
        }
      );
    } else {
      console.error('User ID not available.');
    }
  }

}
