from rest_framework import serializers
from .models import Routine
from exercises.serializers import ExerciseListSerializer

class RoutineListSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    types = serializers.CharField()  # Usamos la propiedad 'types' del modelo
    total_kcal = serializers.IntegerField()  # Usamos la propiedad 'total_kcal' del modelo
    exercises = ExerciseListSerializer(many=True, read_only=True)

    def get_associated_exercises(self, routine):
        return routine.exercises.all()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['exercises'] = ExerciseListSerializer(self.get_associated_exercises(instance), many=True).data
        return representation



class RoutineSerializer(serializers.ModelSerializer):
    types = serializers.CharField(read_only=True)
    total_kcal = serializers.IntegerField(read_only=True)
    class Meta:
        model = Routine
        fields = ['id', 'name', 'total_kcal', 'description', 'types', 'exercises']
