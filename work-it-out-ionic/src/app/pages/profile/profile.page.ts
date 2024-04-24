import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userId: number | undefined;
  profile: Profile = { id:0 , username: '', email: '' , birthdate: '', height: 0, weight:0, status: '' };

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Obtener el ID del usuario al iniciar el componente
    this.getUserId();
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

}
