from django.db import models
from routines.models import Routine


class Calendar(models.Model):
    date = models.DateField()
    routine = models.ManyToManyField(Routine, related_name="routine_calendar")

    def __str__(self):
        return f"{self.date} - {self.routine.name}"
