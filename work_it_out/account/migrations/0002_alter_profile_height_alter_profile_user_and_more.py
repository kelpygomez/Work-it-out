# Generated by Django 5.0.3 on 2024-03-15 17:32

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='height',
            field=models.SmallIntegerField(blank=True, help_text="User's current height", null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(help_text='The user linked to this profile', on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='profile',
            name='weight',
            field=models.SmallIntegerField(blank=True, help_text="User's current weight", null=True),
        ),
    ]
