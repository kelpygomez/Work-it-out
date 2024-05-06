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
    monday_date: string;
    tuesday_date: string;
    wednesday_date: string;
    thursday_date: string;
    friday_date: string;
    saturday_date: string;
    sunday_date: string;
    user: User | null;
    week_number: number;
  }