import json
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Routine
from rest_framework.permissions import IsAuthenticated, AllowAny
from account.models import Profile
from exercises.models import Exercise
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView, ListAPIView
from .serializers import RoutineSerializer, RoutineListSerializer

class RoutineList(generics.ListAPIView):
    serializer_class = RoutineSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user.profile
        return Routine.objects.filter(user=user)

    
class NewRoutineList(ListAPIView):
    serializer_class = RoutineListSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        user = get_object_or_404(User, id=user_id)
        profile = get_object_or_404(Profile, user=user)
        return Routine.objects.filter(user=profile)

class RoutineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Routine.objects.all()
    serializer_class = RoutineSerializer

class RoutineCreateAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = RoutineSerializer

    def get(self, request, user_id):
        user = get_object_or_404(User, id=user_id)
        profile = get_object_or_404(Profile, user=user)
        if user_id is None:
            return Response({'error': 'User ID is required'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            user = get_object_or_404(User, id=user_id)
            profile = get_object_or_404(Profile, user=user)
        except Profile.DoesNotExist:
            return Response({'error': 'User with the provided ID does not exist'}, status=status.HTTP_404_NOT_FOUND)

        routine = Routine.objects.create(
            user=profile,
            name='Nombre de rutina',
            description='Descripción de la rutina'
        )
        routine.save()
        serializer = self.serializer_class(routine)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@csrf_exempt
def add_exercise_to_routine(request, routine_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        exercise_id = data.get('exercise_id')
        routine = Routine.objects.get(id=routine_id)
        exercise = Exercise.objects.get(id=exercise_id)
        routine.exercises.add(exercise)
        routine.save()

        return JsonResponse({'message': 'Exercise added to routine successfully'}, status=200)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def remove_exercise_from_routine(request, routine_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        exercise_id = data.get('exercise_id')
        routine = Routine.objects.get(id=routine_id)
        exercise = Exercise.objects.get(id=exercise_id)
        routine.exercises.remove(exercise)
        routine.save()
        return JsonResponse({'message': 'Exercise removed from routine successfully'}, status=200)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
