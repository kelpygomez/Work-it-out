from rest_framework import serializers
from .models import Exercise

class ExerciseListSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    type = serializers.CharField()
    kcal = serializers.IntegerField()

class ExerciseDetailSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    type = serializers.CharField()
    description = serializers.CharField()
    kcal = serializers.IntegerField()
    required_material = serializers.CharField()
    image = serializers.ImageField()
