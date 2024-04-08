import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss']
})
export class ProfileDetailPage implements OnInit {
  profile: any;
  profileId!: number | null; // Define la variable profileId como number | null

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Obtén el profileId del localStorage o de donde lo estés almacenando
    const profileIdString = localStorage.getItem('profile');
    this.profileId = profileIdString !== null ? parseInt(profileIdString, 10) : null; // Verifica si profileIdString es null
    this.getProfile();
  }

  getProfile(): void {
    if (this.profileId !== null) { // Verifica si profileId es null antes de usarlo
      this.authService.getProfile(this.profileId)
        .pipe(
          tap((data: any) => {
            this.profile = data;
          })
        )
        .subscribe(
          () => {}, // Manejo de éxito vacío
          (error: any) => {
            console.error('Error getting profile:', error);
          }
        );
    } else {
      console.error('Profile ID is null');
    }
  }
}
