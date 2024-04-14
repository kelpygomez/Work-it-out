import { Component, OnInit } from '@angular/core';
import { Routine } from '../../interfaces/routine.interface';
import { AuthService } from '../../services/auth.service';
import { RoutineService } from '../../services/routines.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.page.html',
  styleUrls: ['./routines-list.page.scss'],
})
export class RoutinesListPage implements OnInit {
  routines: Routine[] = [];
  userId: number | undefined;
  user: User | null = null;

  constructor(private authService: AuthService, private routineService: RoutineService) { }

  ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString) as User;
      console.log(this.user);
      this.getUserId(this.user.username); // Aquí pasas el nombre de usuario
    }
  }
  
  getUserId(username: string) {
    this.authService.getUserId(username).subscribe(
      (data: any) => {
        this.userId = data.user_id;
        console.log('User ID:', this.userId);
        this.loadRoutines();
      },
      (error: any) => {
        console.error('Error fetching user ID:', error);
      }
    );
  }

  loadRoutines() {
    if (this.userId) {
      this.routineService.getRutinas(this.userId).subscribe(
        (data: Routine[]) => {
          this.routines = data;
        },
        (error: any) => {
          console.error('Error fetching routines:', error);
        }
      );
    } else {
      console.error('User ID not available.');
    }
  }
  
}
