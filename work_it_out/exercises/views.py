from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Exercise
from .serializers import ExerciseListSerializer, ExerciseDetailSerializer

class ExerciseListView(APIView):
    def get(self, request):
        exercises = Exercise.objects.all()
        serializer = ExerciseListSerializer(exercises, many=True)
        return Response(serializer.data)

class ExerciseDetailView(APIView):
    def get(self, request, pk):
        exercise = Exercise.objects.get(pk=pk)
        serializer = ExerciseDetailSerializer(exercise)
        return Response(serializer.data)
