import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service'; 

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss']
})
export class ProfileEditPage implements OnInit {
  profileForm!: FormGroup;
  profileId!: number;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el profileId del parámetro de la URL
    this.profileId = +this.route.snapshot.params['id'];
    this.profileForm = this.fb.group({
      profileId: [this.profileId], // Agregar el profileId al formulario
      photo: ['', Validators.required],
      birthdate: [new Date(), Validators.required],
      weight: [0, Validators.required],
      height: [0, Validators.required],
      // Puedes agregar más campos aquí si los necesitas
    });
    console.log(this.profileId);
  }

  saveProfile() {
    if (this.profileForm && this.profileForm.valid) {
      // Obtener los datos del formulario
      const formData = this.profileForm.value;
  
      this.profileService.saveProfile(formData).subscribe(
        response => {
          console.log('Profile updated successfully:', response);
        },
        error => {
          console.error('Error updating profile:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
