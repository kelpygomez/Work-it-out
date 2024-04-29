from django.urls import path
from .views import WeekRetrieveCreateAPIView, WeekRetrieveUpdateDestroyAPIView

app_name = "tracker"

urlpatterns = [
    path('weeks/', WeekRetrieveCreateAPIView.as_view(), name='week-retrieve-create'),
    path('weeks/<int:pk>/', WeekRetrieveUpdateDestroyAPIView.as_view(), name='week-retrieve-update-destroy'),
]

