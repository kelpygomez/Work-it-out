import { User } from './user.interface';
export interface Profile {
    id: number;
    user: User; 
    birthdate: string | null;
    photo: string | null;
    weight: number | null;
    height: number | null;
    status: string;
  }