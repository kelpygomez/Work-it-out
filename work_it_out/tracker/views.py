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
from django.views.decorators.csrf import csrf_exempt

class CurrentWeekAPIView(RetrieveAPIView):
    serializer_class = WeekSerializer

    def get(self, request, user_id):
        user = get_object_or_404(User, id=user_id)
        profile = get_object_or_404(Profile, user=user)
        current_week, current_year = timezone.now().isocalendar()[1], timezone.now().isocalendar()[0]

        week, created = Week.objects.get_or_create(
            profile=profile,
            year=current_year,
            week_number=current_week,
            defaults={'profile': profile, 'year': current_year, 'week_number': current_week}
        )

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
            week = Week.objects.get(profile=profile,year=year,week_number=next_week_number)
        except Week.DoesNotExist:
            week = Week.objects.create(profile=profile,year=year,week_number=next_week_number)
            week.save()
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
            week = Week.objects.get(profile=profile,year=year,week_number=next_week_number)
        except Week.DoesNotExist:
            week = Week.objects.create(profile=profile,year=year,week_number=next_week_number)
            week.save()
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
    