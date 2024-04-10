import { User } from './user.interface';
export interface ProfileData {
  id: number;
  user: User;
  birthdate: string | null;
  photo: string | null;
  weight: number | null;
  height: number | null;
  status: string;
}

export interface Profile {
  id: number;
  user: {
    username: string;
    email: string;
  };
  birthdate: string;
  photo: string; // ruta de la foto
  weight: number;
  height: number;
  status: string;
}
