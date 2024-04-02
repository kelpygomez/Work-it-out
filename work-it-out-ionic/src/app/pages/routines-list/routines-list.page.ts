// routines-list.page.ts

import { Component, OnInit } from '@angular/core';
import { Routine } from '../../interfaces/routine.interface';
import { RoutineService } from '../../services/routines.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.page.html',
  styleUrls: ['./routines-list.page.scss'],
})
export class RoutinesListPage implements OnInit {
  routines!: Routine[];
  userId!: number;

  constructor(private http: HttpClient, private routineService: RoutineService) { }

  ngOnInit() {
    this.getUserId();
  }

  getUserId() {
    this.routineService.getUserId().subscribe(
      (data) => {
        this.userId = data.user_id;
        console.log('User ID:', this.userId);
        this.loadRoutines();
      },
      (error) => {
        console.error('Error fetching user ID:', error);
      }
    );
  }

  loadRoutines() {
    this.routineService.getRutinas(this.userId).subscribe(
      (data: Routine[]) => {
        this.routines = data;
      },
      (error: any) => {
        console.error('Error fetching routines:', error);
      }
    );
  }
}
