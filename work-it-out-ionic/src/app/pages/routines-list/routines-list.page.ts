// routines-list.page.ts

import { Component, OnInit } from '@angular/core';
import { Routine } from '../../interfaces/routine.interface';
import { RoutineService } from '../../services/routines.service';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.page.html',
  styleUrls: ['./routines-list.page.scss'],
})
export class RoutinesListPage implements OnInit {
  routines!: Routine[];

  constructor(private routineService: RoutineService) { }

  ngOnInit() {
    this.loadRoutines();
  }

  loadRoutines() {
    this.routineService.getRutinas().subscribe(
      (data: Routine[]) => {
        this.routines = data;
      },
      (error: any) => {
        console.error('Error fetching routines:', error);
      }
    );
  }
}
