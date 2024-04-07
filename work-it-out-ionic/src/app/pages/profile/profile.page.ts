import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {
    // Inicializar el formulario con campos requeridos y valores por defecto
    this.profileForm = this.fb.group({
      photo: ['', Validators.required],
      birthdate: [new Date(), Validators.required],
      weight: [0, Validators.required],
      height: [0, Validators.required]
    });
  }

  saveProfile() {
    // Verificar si el formulario existe y es válido
    if (this.profileForm && this.profileForm.valid) {
      const formData = new FormData();
      
      // Obtener los valores de los campos solo si existen en el formulario
      const photo = this.profileForm.get('photo');
      const birthdate = this.profileForm.get('birthdate');
      const weight = this.profileForm.get('weight');
      const height = this.profileForm.get('height');
      
      // Verificar si los campos existen antes de agregarlos a formData
      if (photo && birthdate && weight && height) {
        formData.append('photo', photo.value);
        formData.append('birthdate', birthdate.value);
        formData.append('weight', weight.value);
        formData.append('height', height.value);
  
        this.profileService.updateProfile(formData).subscribe(
          response => {
            console.log('Profile updated successfully:', response);
            // Aquí puedes redirigir al usuario a otra página si lo deseas
          },
          error => {
            console.error('Error updating profile:', error);
          }
        );
      } else {
        console.error('Form fields do not exist');
      }
    } else {
      console.error('Form is invalid');
    }
  }
  

  cancel() {
    // Aquí puedes redirigir al usuario a otra página o realizar otras acciones de cancelación
  }
}
