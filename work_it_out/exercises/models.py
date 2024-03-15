from django.core.validators import FileExtensionValidator
from django.db import models


class Exercise(models.Model):
    class Type(models.TextChoices):
        LEG = "LEG", "Leg"
        BICEPS = "BI", "Biceps"
        TRICEPS = "TRI", "Triceps"
        CHEST = "CHE", "Chest"
        BACK = "BA", "Back"
        SHOULDERS = "SHO", "Shoulders"

    name = models.CharField(
        max_length=255,
        help_text="Name of the exercise",
    )
    type = models.CharField(
        max_length=10,
        choices=Type.choices,
        help_text="The muscle the exercise will work on",
    )
    description = models.TextField(
        help_text="Description how to do the exercise",
    )
    kcal = models.IntegerField(
        help_text="The number of kcals burnt per repetition",
    )
    required_material = models.CharField(
        max_length=255, help_text="Material you need to do the exercise"
    )
    image = models.ImageField(
        blank=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png'])],
        help_text="Exercise's ilustration",
    )
