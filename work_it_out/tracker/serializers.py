from rest_framework import serializers
from .models import Week
from routines.serializers import RoutineListSerializer

class WeekSerializer(serializers.ModelSerializer):
    # Agrega los campos de fecha de la semana al serializador
    monday_date = serializers.DateField()
    tuesday_date = serializers.DateField()
    wednesday_date = serializers.DateField()
    thursday_date = serializers.DateField()
    friday_date = serializers.DateField()
    saturday_date = serializers.DateField()
    sunday_date = serializers.DateField()

    monday = RoutineListSerializer()
    tuesday = RoutineListSerializer()
    wednesday = RoutineListSerializer()
    thursday = RoutineListSerializer()
    friday = RoutineListSerializer()
    saturday = RoutineListSerializer()
    sunday = RoutineListSerializer()


    class Meta:
        model = Week
        # Incluye los nuevos campos en la lista de campos
        fields = '__all__'

