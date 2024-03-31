// exercise.model.ts

export interface Exercise {
    id: number;
    name: string;
    type: string;
    kcal: number;
    description: string;
    required_material: string;
    image: string; // Si la imagen es una URL, puedes usar el tipo string
  }
  