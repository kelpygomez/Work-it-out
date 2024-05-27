import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Profile } from 'src/app/interfaces/profile.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  userId: number | undefined;
  profile: Profile = { id:0 , username: '', email: '' , birthdate: '', height: 0, weight:0, status: '', photo:'' };
  validationErrors: any = {};
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
  isValidProfile(): boolean {
    // Restablecer los errores de validación
    this.validationErrors = {};
  
    // Realizar validación de los datos aquí
    let isValid = true;
  
    // Validación del formato de fecha de nacimiento (YYYY-MM-DD)
    const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthdateRegex.test(this.profile.birthdate)) {
      this.validationErrors.birthdate = 'Birthdate must be in YYYY-MM-DD format (2000-09-01)';
      isValid = false;
    }
  
    // Validación de peso y altura sin decimales
    if (this.profile.weight % 1 !== 0) {
      this.validationErrors.weight = 'Weight must not be decimal';
      isValid = false;
    }
    if (this.profile.height % 1 !== 0) {
      this.validationErrors.height = 'Height must not be decimal';
      isValid = false;
    }
  
    return isValid;
  }

  profileImage = ''

  onFileChange(event: any) {
    this.profileImage = event.target.files[0];
  }

  saveChanges() {
    if (!this.isValidProfile()) {
      return;
    }

    const formData = new FormData();
    formData.append('id', String(this.profile.id));
    formData.append('username', this.profile.username);
    formData.append('email', this.profile.email);
    formData.append('birthdate', this.profile.birthdate);
    formData.append('height', String(this.profile.height));
    formData.append('weight', String(this.profile.weight));
    formData.append('status', this.profile.status);

    if (this.profileImage) {
      formData.append('photo', this.profileImage);
    }

    this.authService.updateProfile(formData).subscribe(
      () => {
        Swal.fire({
          title: 'Success!',
          text: 'Your profile has been updated.',
          icon: 'success',
          confirmButtonColor: "#1d965b",
        });
        console.log('Changes saved successfully');
      },
      (error: any) => {
        console.error('Error saving changes:', error);
      }
    );
  }
}
