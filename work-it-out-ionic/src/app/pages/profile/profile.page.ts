import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from '../../interfaces/profile.interface';
import { Observer } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: Profile | null = null; // Inicializa profile como null hasta que se cargue

  profileForm: FormGroup;

  constructor(private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      birthdate: [''],
      weight: [''],
      height: [''],
      photo: ['']
    });
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile().subscribe({
      next: (profile: Profile) => {
        this.profile = profile;
        this.profileForm.patchValue({
          username: profile.user.username || [null],
          email: profile.user.email || [null],
          birthdate: profile.birthdate || [null],
          weight: profile.weight || [null],
          height: profile.height || [null],
          photo: profile.photo || [null]
        });
        console.log(profile);
      },
      error: (error) => {
        console.error('Error al obtener el perfil:', error);
      }
    } as Observer<Profile>);
  }

  saveProfile(): void {
    if (this.profileForm.valid && this.profile) {
      const updatedProfile: Profile = {
        ...this.profile,
        user: {
          ...this.profile.user,
          username: this.profileForm.value.username,
          email: this.profileForm.value.email
        },
        birthdate: this.profileForm.value.birthdate,
        weight: this.profileForm.value.weight,
        height: this.profileForm.value.height,
        photo: this.profileForm.value.photo,
        // id: this.profile.id || 0, 
        status: this.profile.status
      };
  
      this.profileService.saveProfile(updatedProfile).subscribe({
        next: (response) => {
          // Actualizar el perfil local después de guardar
          this.profile = updatedProfile;
        },
        error: (error) => {
          console.error('Error al guardar el perfil:', error);
        }
      });
    } else {
      console.error('Formulario inválido');
      console.log('Errores de validación:', this.profileForm.errors);
    }
  }
  
  
}
