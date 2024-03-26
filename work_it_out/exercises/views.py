from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Exercise
from .serializers import ExerciseListSerializer, ExerciseDetailSerializer
from django.http import HttpResponse
from django.conf import settings
import os

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


def serve_image(request, image_name):
    image_path = os.path.join(settings.STATIC_ROOT, 'images', image_name)
    with open(image_path, 'rb') as image_file:
        return HttpResponse(image_file.read(), content_type='image/jpeg')
