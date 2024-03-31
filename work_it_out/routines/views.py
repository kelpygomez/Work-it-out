from rest_framework import generics
from django.http import JsonResponse
from .models import Routine
from exercises.models import Exercise
from .serializers import RoutineSerializer, RoutineListSerializer

class RoutineList(generics.ListCreateAPIView):
    queryset = Routine.objects.all()
    serializer_class = RoutineListSerializer

class RoutineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Routine.objects.all()
    serializer_class = RoutineSerializer

def add_exercise_to_routine(request, routine_id):
    if request.method == 'POST':
        exercise_id = request.POST.get('exercise_id')
        routine = Routine.objects.get(pk=routine_id)
        exercise = Exercise.objects.get(pk=exercise_id)
        routine.exercises.add(exercise)
        routine.save()

        return JsonResponse({'message': 'Exercise added to routine successfully'}, status=200)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

def remove_exercise_from_routine(request, routine_id):
    if request.method == 'DELETE':
        exercise_id = request.POST.get('exercise_id')
        routine = Routine.objects.get(pk=routine_id)
        exercise = Exercise.objects.get(pk=exercise_id)
        routine.exercises.remove(exercise)
        routine.save()
        return JsonResponse({'message': 'Exercise removed from routine successfully'}, status=200)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
