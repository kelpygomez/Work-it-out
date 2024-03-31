from rest_framework import serializers
from .models import Routine
from exercises.serializers import ExerciseListSerializer

class RoutineListSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    total_kcal = serializers.IntegerField()
    description = serializers.CharField()
    type = serializers.CharField()

    def get_associated_exercises(self, routine):
        return routine.exercises.all()

    exercises = ExerciseListSerializer(many=True, read_only=True)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['exercises'] = ExerciseListSerializer(self.get_associated_exercises(instance), many=True).data
        return representation

class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ['id', 'name', 'total_kcal', 'description', 'type', 'exercises']
