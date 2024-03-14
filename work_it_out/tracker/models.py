from django.db import models
from routines.models import Routine


class Calendar(models.Model):
    date = models.DateField()
    routine = models.ForeignKey(Routine, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.date} - {self.routine.name}"
