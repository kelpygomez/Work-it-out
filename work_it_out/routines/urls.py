from django.urls import path
from . import views

app_name = 'routines'

urlpatterns = [
    path('user/<int:user_id>/', views.RoutineList.as_view(), name='user_routines_list'),
    path('<int:pk>/', views.RoutineDetail.as_view(), name='exercise-detail'),
    path('<int:routine_id>/add-exercise/', views.add_exercise_to_routine, name='add-exercise-to-routine'),
    path('<int:routine_id>/remove-exercise/', views.remove_exercise_from_routine, name='remove-exercise-from-routine'),
    path('create/<int:user_id>/', views.RoutineCreateAPIView .as_view(), name='routine-create'),
]
