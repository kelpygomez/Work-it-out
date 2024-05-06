// routine.model.ts
import { Exercise } from './exercise.interface'; // Importa el modelo de Exercise

export interface Routine {
    id: number;
    name: string;
    total_kcal: number;
    description: string;
    types: string;
    exercises: Exercise[]; // Asegúrate de tener el modelo de ejercicio definido correctamente
  }
  