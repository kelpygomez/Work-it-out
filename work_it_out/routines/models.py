from django.db import models
from exercises.models import Exercise


class Routine(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    description = models.TextField()
    kcal_total = models.IntegerField()
    exercises = models.ManyToManyField(Exercise, related_name='routines')

    def __str__(self):
        return self.name
