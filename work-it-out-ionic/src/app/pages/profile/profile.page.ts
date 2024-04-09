import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from '../../interfaces/profile.interface';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile!: Profile;
  
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
      this.profileService.getProfile().subscribe({
        next: (profile: Profile) => {
          this.profile = profile;
          console.log("", profile);
        },
        error: (error) => {
          console.error('Error al obtener el perfil:', error);
        }
      } as Observer<Profile>);
  }

  saveProfile(profile: Profile): void {
    this.profileService.saveProfile(profile).subscribe({
      next: (response) => {
        console.log('Perfil guardado exitosamente:', response);
      },
      error: (error) => {
        console.error('Error al guardar el perfil:', error);
      }
    });
  }
}
