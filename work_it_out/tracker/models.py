from account.models import Profile
from django.db import models
from routines.models import Routine
from datetime import datetime, timedelta

class Week(models.Model):
    monday = models.ForeignKey(
        Routine, on_delete=models.SET_NULL, null=True, related_name='monday_routine'
    )
    tuesday = models.ForeignKey(
        Routine, on_delete=models.SET_NULL, null=True, related_name='tuesday_routine'
    )
    wednesday = models.ForeignKey(
        Routine, on_delete=models.SET_NULL, null=True, related_name='wednesday_routine'
    )
    thursday = models.ForeignKey(
        Routine, on_delete=models.SET_NULL, null=True, related_name='thursday_routine'
    )
    friday = models.ForeignKey(
        Routine, on_delete=models.SET_NULL, null=True, related_name='friday_routine'
    )
    saturday = models.ForeignKey(
        Routine, on_delete=models.SET_NULL, null=True, related_name='saturday_routine'
    )
    sunday = models.ForeignKey(
        Routine, on_delete=models.SET_NULL, null=True, related_name='sunday_routine'
    )
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    week_number = models.IntegerField()  # Número de la semana en el año
    year = models.IntegerField() # Año en el que estamos

    def __str__(self):
        return f"Week {self.week_number} for {self.profile.user.username}"

    def set_week_dates(self):
        # Obtener el primer día de la semana basado en el número de semana y el año
        first_day_of_week = datetime.strptime(f'{self.year}-W{self.week_number}-1', "%Y-W%W-%w").date()

        # Calcular las fechas de los días de la semana
        monday = first_day_of_week
        tuesday = monday + timedelta(days=1)
        wednesday = monday + timedelta(days=2)
        thursday = monday + timedelta(days=3)
        friday = monday + timedelta(days=4)
        saturday = monday + timedelta(days=5)
        sunday = monday + timedelta(days=6)
        
        # Actualizar los atributos de fecha de la semana
        self.monday_date = monday
        self.tuesday_date = tuesday
        self.wednesday_date = wednesday
        self.thursday_date = thursday
        self.friday_date = friday
        self.saturday_date = saturday
        self.sunday_date = sunday
        
        # Guardar el objeto Week en la base de datos
        self.save()
        
    def __init__(self, *args, **kwargs):
        super(Week, self).__init__(*args, **kwargs)
        # Llamar al método set_week_dates() al crear una instancia de Week
        self.set_week_dates()
