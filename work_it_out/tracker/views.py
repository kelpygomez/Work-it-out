from rest_framework import generics

from .models import Week
from .serializers import WeekSerializer


class WeekListCreateAPIView(generics.ListCreateAPIView):
    queryset = Week.objects.all()
    serializer_class = WeekSerializer

    def perform_create(self, serializer):
        # Asociar rutinas a cada día de la semana si se proporcionan en la solicitud
        if 'rutinas' in self.request.data:
            rutinas = self.request.data['rutinas']
            serializer.save(rutinas=rutinas)


class WeekRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Week.objects.all()
    serializer_class = WeekSerializer
