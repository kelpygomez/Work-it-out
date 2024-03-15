# Generated by Django 5.0.3 on 2024-03-15 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('exercises', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Routine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('total_kcal', models.IntegerField()),
                ('exercises', models.ManyToManyField(related_name='exercise_routie', to='exercises.exercise')),
            ],
        ),
    ]
