from django.db import models
from exercises.models import Exercise
from account.models import Profile

class Routine(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    exercises = models.ManyToManyField(Exercise, related_name='exercise_routine')
    user = models.ForeignKey(Profile, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.name
    
    @property
    def total_kcal(self):
        total_calories = sum(exercise.kcal for exercise in self.exercises.all())
        return total_calories
    
    @property
    def required_materials(self):
        required_materials = set(exercise.required_material for exercise in self.exercises.all())
        return "/".join(required_materials) if required_materials else "Nothing"
    
    @property
    def types(self):
        # Obtener los tipos únicos de los ejercicios asociados a la rutina
        types = set(exercise.type for exercise in self.exercises.all())
        # Si hay más de tres tipos, establecer como "FULL BODY"
        if len(types) > 3:
            return "FULL BODY"
        # Si no, concatenar los tipos separados por barras
        return "/".join(types) if types else "Unknown"