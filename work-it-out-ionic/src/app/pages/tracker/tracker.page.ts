import { Component } from '@angular/core';
import { TrackerService } from '../../services/tracker.service';
import { Week } from '../../interfaces/tracker.interface';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage {
  weekDays: { day: string, routine: Week | null }[] = [];

  constructor(private trackerService: TrackerService) {
  }

}