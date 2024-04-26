from rest_framework import generics

from .models import Week
from .serializers import WeekSerializer


class WeekListCreateAPIView(generics.ListCreateAPIView):
    queryset = Week.objects.all()
    serializer_class = WeekSerializer


class WeekRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Week.objects.all()
    serializer_class = WeekSerializer
