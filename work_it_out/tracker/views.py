from django.db import IntegrityError
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from django.utils import timezone
from .models import Week
from routines.models import Routine
from account.models import Profile
from django.contrib.auth.models import User
from .serializers import WeekSerializer
from django.contrib.auth.decorators import login_required
import json
from django.http import JsonResponse
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt

class CurrentWeekAPIView(RetrieveAPIView):
    serializer_class = WeekSerializer

    def get(self, request, user_id):
        user = get_object_or_404(User, id=user_id)
        profile = get_object_or_404(Profile, user=user)
        current_week = timezone.now().isocalendar()[1]
        current_year = timezone.now().isocalendar()[0]
        
        try:
            # Intentar obtener el objeto Week
            print("Intentando obtener el objeto Week...")
            week = Week.objects.get(profile=profile, year=current_year, week_number=current_week)
            print("Objeto Week encontrado.")
        except Week.DoesNotExist:
            try:
                # Si no existe, intentar crear un nuevo objeto Week
                print("Objeto Week no encontrado. Intentando crear uno nuevo...")
                week = Week.objects.create(profile=profile, year=current_year, week_number=current_week)
                print("Nuevo objeto Week creado.")
            except IntegrityError:
                # Si ocurre un IntegrityError, volver a intentar obtener el objeto Week
                print("Error de integridad al intentar crear el objeto Week. Intentando obtenerlo de nuevo...")
                week = Week.objects.get(profile=profile, year=current_year, week_number=current_week)
                print("Objeto Week encontrado después del error de integridad.")

        serializer = self.serializer_class(week)
        return Response(serializer.data)

    
class UpcomingWeekAPIView(RetrieveAPIView):
    serializer_class = WeekSerializer

    def get(self, request, week_id):
        week = get_object_or_404(Week, id=week_id)
        profile = week.profile
        next_week_number = week.week_number + 1
        year = week.year

        try:
            # Intentar obtener el objeto Week
            week = Week.objects.get(profile=profile, year=year, week_number=next_week_number)
        except Week.DoesNotExist:
            try:
                # Si no existe, intentar crear un nuevo objeto Week
                week = Week.objects.create(profile=profile, year=year, week_number=next_week_number)
                week.save()
            except IntegrityError:
                # Si ocurre un IntegrityError, volver a intentar obtener el objeto Week
                week = Week.objects.get(profile=profile, year=year, week_number=next_week_number)

        serializer = self.serializer_class(week)
        return Response(serializer.data)

class PreviousWeekAPIView(RetrieveAPIView):
    serializer_class = WeekSerializer

    def get(self, request, week_id):
        week = get_object_or_404(Week, id=week_id)
        profile = week.profile
        next_week_number = week.week_number - 1
        year = week.year

        try:
            # Intentar obtener el objeto Week
            week = Week.objects.get(profile=profile, year=year, week_number=next_week_number)
        except Week.DoesNotExist:
            try:
                # Si no existe, intentar crear un nuevo objeto Week
                week = Week.objects.create(profile=profile, year=year, week_number=next_week_number)
                week.save()
            except IntegrityError:
                # Si ocurre un IntegrityError, volver a intentar obtener el objeto Week
                week = Week.objects.get(profile=profile, year=year, week_number=next_week_number)

        serializer = self.serializer_class(week)
        return Response(serializer.data)

    
@csrf_exempt
def remove_routine_from_week(request, week_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        week_day = data.get('weekDay')
        if week_day in ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']:
            week = Week.objects.get(id=week_id)
            setattr(week, week_day, None)  # Establece el día de la semana correspondiente como NUll
            week.save()
            return JsonResponse({'message': 'Routine removed from week successfully'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid week day'}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def add_routine_to_week(request, week_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        week_day = data.get('weekDay')
        routine_id = data.get('routineId')
        if week_day in ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']:
            routine = Routine.objects.get(id=routine_id)
            week = Week.objects.get(id=week_id)
            setattr(week, week_day, routine)  # Asigna el ID de la rutina al día de la semana correspondiente
            week.save()
            return JsonResponse({'message': 'Routine added to week successfully'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid week day'}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    