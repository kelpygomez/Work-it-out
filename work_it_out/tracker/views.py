from rest_framework import generics
from rest_framework.response import Response
from django.utils import timezone
from .models import Week
from .serializers import WeekSerializer

class WeekRetrieveCreateAPIView(generics.RetrieveCreateAPIView):
    serializer_class = WeekSerializer

    def get_queryset(self):
        # Obtener el perfil asociado al usuario actual
        profile = self.request.user.profile

        # Obtener todas las semanas asociadas al perfil
        return Week.objects.filter(profile=profile)

    def post(self, request, *args, **kwargs):
        # Obtener el perfil asociado al usuario actual
        profile = self.request.user.profile

        # Obtener todas las semanas asociadas al perfil
        weeks = Week.objects.filter(profile=profile)

        # Obtener la última semana, si existe
        last_week = weeks.last()

        # Calcular el número de semana y año para la próxima semana
        if last_week:
            next_week_number = last_week.week_number + 1
            next_year = last_week.year
            if next_week_number > 52:
                next_week_number = 1
                next_year += 1
        else:
            # Si no hay semanas existentes, crear la semana para la semana actual
            next_week_number = timezone.now().isocalendar()[1]
            next_year = timezone.now().isocalendar()[0]

        # Crear la nueva semana
        Week.objects.create(profile=profile, week_number=next_week_number, year=next_year)

        # Devolver una respuesta exitosa
        return Response({'message': 'Week created successfully'}, status=201)



class WeekRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Week.objects.all()
    serializer_class = WeekSerializer
