from django.urls import path
from .views import UpcomingWeekAPIView,PreviousWeekAPIView, CurrentWeekAPIView, remove_routine_from_week, add_routine_to_week

app_name = "tracker"

urlpatterns = [
    path('upcoming/<int:week_id>/', UpcomingWeekAPIView.as_view(), name='week-upcoming'),
    path('previous/<int:week_id>/', PreviousWeekAPIView.as_view(), name='week-previous'),
    path('current/<int:user_id>/', CurrentWeekAPIView.as_view(), name='week-retrieve-current'),
    path('<int:week_id>/remove-routine/', remove_routine_from_week, name='remove-routine-week'),
    path('<int:week_id>/add-routine/', add_routine_to_week, name='add-routine-week'),
]

