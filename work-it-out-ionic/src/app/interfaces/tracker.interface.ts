import { Routine } from './routine.interface';
import { User } from './user.interface';
export interface Week {
    id: number;
    monday: Routine | null;
    tuesday: Routine | null;
    wednesday: Routine | null;
    thursday: Routine | null;
    friday: Routine | null;
    saturday: Routine | null;
    sunday: Routine | null;
    monday_number: number;
    tuesday_number: number;
    wednesday_number: number;
    thursday_number: number;
    friday_number: number;
    saturday_number: number;
    sunday_number: number;
    user: User | null;
    week_number: number;
  }