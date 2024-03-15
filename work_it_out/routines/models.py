from django.db import models
from exercises.models import Exercise


class Routine(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    description = models.TextField()
    total_kcal = models.IntegerField()
    exercises = models.ManyToManyField(Exercise, related_name='exercise_routie')

    def __str__(self):
        return self.name
