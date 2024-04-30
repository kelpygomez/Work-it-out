from django.urls import path
from .views import WeekRetrieveAPIView, WeekRetrieveUpdateDestroyAPIView

app_name = "tracker"

urlpatterns = [
    path('upcoming/<int:pk>/', WeekRetrieveAPIView.as_view(), name='week-retrieve'),
    path('weeks/<int:pk>/', WeekRetrieveUpdateDestroyAPIView.as_view(), name='week-retrieve-update-destroy'),
    path('current/', WeekRetrieveUpdateDestroyAPIView.as_view(), name='week-retrieve-current')
]

