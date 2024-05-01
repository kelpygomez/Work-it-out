from django.urls import path
from .views import WeekRetrieveUpdateDestroyAPIView, CurrentWeekAPIView, remove_routine_from_week, add_routine_to_week

app_name = "tracker"

urlpatterns = [
    #path('upcoming/<int:pk>/', WeekRetrieveAPIView.as_view(), name='week-retrieve'),
    path('weeks/<int:pk>/', WeekRetrieveUpdateDestroyAPIView.as_view(), name='week-retrieve-update-destroy'),
    path('current/<int:user_id>/', CurrentWeekAPIView.as_view(), name='week-retrieve-current'),
    path('<int:week_id>/remove-routine/', remove_routine_from_week, name='remove-routine-week'),
    path('<int:week_id>/add-routine/', add_routine_to_week, name='add-routine-week'),
]

