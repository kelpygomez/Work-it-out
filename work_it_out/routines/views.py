import json
from rest_framework import generics, status
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Routine
from rest_framework.permissions import IsAuthenticated, AllowAny
from account.models import Profile
from exercises.models import Exercise
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RoutineSerializer, RoutineListSerializer

class RoutineList(generics.ListAPIView):
    serializer_class = RoutineSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user.profile
        return Routine.objects.filter(user=user)

class RoutineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Routine.objects.all()
    serializer_class = RoutineSerializer

class RoutineCreateAPIView(APIView):
    def post(self, request, format=None):
        user_id = request.data.get('user_id')
        if user_id is None:
            return Response({'error': 'User ID is required'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            user = Profile.objects.get(id=user_id)
        except Profile.DoesNotExist:
            return Response({'error': 'User with the provided ID does not exist'}, status=status.HTTP_404_NOT_FOUND)

        routine = Routine.objects.create(
            user=user,
            name='Nombre de rutina',
            type='Tipo de rutina',
            description='Descripción de la rutina',
            total_kcal=0
        )
        return Response({'id': routine.id}, status=status.HTTP_201_CREATED)


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
