from django.core.validators import FileExtensionValidator
from django.db import models


class Exercise(models.Model):
    class Type(models.TextChoices):
        LEG = "Leg"
        BICEPS = "Biceps"
        TRICEPS = "Triceps"
        CHEST = "Chest"
        BACK = "Back"
        SHOULDERS = "Shoulders"
    
    class RequiredMaterial(models.TextChoices):
        BARBELL = "Barbell"
        WEIGHT_PLATES = "Weight Plates"
        DUMBBELLS = "Dumbbells"
        CABLE_MACHINE = "Cable Machine"
        BOSU_BALL = "Bosu Ball"
        KETTLEBELLS = "Kettlebells"
        TRX = "TRX"

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
        max_length=50, help_text="Material you need to do the exercise", choices=RequiredMaterial.choices
    )
    image = models.ImageField(
        blank=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png'])],
        help_text="Exercise's ilustration",
        upload_to='exercise_images/'
    )
