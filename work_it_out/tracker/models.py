from django.contrib.auth.models import User
from django.db import models
from routines.models import Routine


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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    week_number = models.IntegerField()  # Número de la semana en el año

    def __str__(self):
        return f"Week {self.week_number} for {self.user.username}"
