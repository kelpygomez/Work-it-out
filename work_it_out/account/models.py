from django.conf import settings
from django.core.validators import FileExtensionValidator
from django.db import models
from django.urls import reverse


class Profile(models.Model):
    class Status(models.TextChoices):
        ACTIVE = "AC", "Active"
        DISABLE = "DS", "Disable"
        CANCELLED = "CA", "Cancelled"

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        help_text="The user linked to this profile",
        related_name="profile",
    )
    birthdate = models.DateField(blank=True, null=True, help_text="User's date of birth")
    photo = models.ImageField(
        upload_to='users/%Y/%m/%d/',
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png'])],
        help_text="User's avatar",
    )
    weight = models.SmallIntegerField(blank=True, null=True, help_text="User's current weight")
    height = models.SmallIntegerField(blank=True, null=True, help_text="User's current height")
    status = models.CharField(
        max_length=10,
        choices=Status.choices,
        default=Status.ACTIVE,
        help_text="Current status of the profile",
    )

    def __str__(self):
        return f'Profile of {self.user}'

    def get_absolute_url(self):
        return reverse("account:dashboard")

    def change_status(self, new_status):
        if new_status in [status[0] for status in self.Status.choices]:
            self.status = new_status
            self.save()
        else:
            raise ValueError("Invalid status")

    @property
    def BMI(self):
        return self.weight / (self.height**2)
