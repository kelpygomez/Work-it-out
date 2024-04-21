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
    user: User;
    week_number: number;
  }