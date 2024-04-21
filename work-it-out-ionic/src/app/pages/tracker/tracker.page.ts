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
    // Inicializar los días de la semana
    this.initializeWeek();
  }

  initializeWeek() {
    // Asignar nombres de los días de la semana
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    // Crear objetos para cada día de la semana con rutina inicialmente nula
    this.weekDays = daysOfWeek.map(day => ({ day, routine: null }));

    // Obtener el rastreador para la semana actual
    this.trackerService.getTracker().subscribe(
      (tracker: Week[]) => {
        // Asignar las rutinas a los días correspondientes
        tracker.forEach(trackerDay => {
          const dayIndex = trackerDay.week_day - 1; // El índice de los días comienza en 0
          this.weekDays[dayIndex].routine = trackerDay;
        });
      },
      error => {
        console.error('Error al obtener el rastreador:', error);
      }
    );
  }

  addRoutine(day: { day: string, routine: Week | null }) {
    // Lógica para agregar rutina para el día seleccionado
    // Redirigir a una página donde el usuario pueda seleccionar una rutina
  }

  updateRoutine(day: { day: string, routine: Week }) {
    // Lógica para actualizar la rutina para el día seleccionado
    // Redirigir a una página donde el usuario pueda actualizar la rutina
  }

  deleteRoutine(day: { day: string, routine: Week }) {
    // Lógica para eliminar la rutina para el día seleccionado
    // Llamar al método deleteTracker del servicio TrackerService
    if (day.routine) {
      this.trackerService.deleteTracker(day.routine.id).subscribe(
        () => {
          // Eliminar la rutina localmente
          day.routine = null;
          console.log('Rutina eliminada correctamente');
        },
        error => {
          console.error('Error al eliminar la rutina:', error);
        }
      );
    }
  }

  viewRoutineDetails(day: { day: string, routine: Week }) {
    // Lógica para ver los detalles de la rutina para el día seleccionado
    // Redirigir a una página donde se muestren los detalles completos de la rutina
  }
}