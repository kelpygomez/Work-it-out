from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from django.utils import timezone
from .models import Week
from account.models import Profile
from django.contrib.auth.models import User
from .serializers import WeekSerializer
from django.contrib.auth.decorators import login_required

class WeekRetrieveAPIView(generics.RetrieveAPIView):
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

class CurrentWeekAPIView(RetrieveAPIView):
    serializer_class = WeekSerializer

    def get(self, request,user_id):
        user = get_object_or_404(User, id=user_id)
        profile = get_object_or_404(Profile, user=user)
        current_week = timezone.now().isocalendar()[1]
        current_year = timezone.now().isocalendar()[0]
        try:
            week = Week.objects.get(profile=profile,year=current_year,week_number=current_week)
        except Week.DoesNotExist:
            week = Week.objects.create(profile=profile,year=current_year,week_number=current_week)
            week.save()
        serializer = self.serializer_class(week)
        return Response(serializer.data)