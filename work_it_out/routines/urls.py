from django.urls import path
from . import views

app_name = 'routines'

urlpatterns = [
    path('', views.RoutineList.as_view(), name='exercise-list'),
    path('<int:pk>/', views.RoutineDetail.as_view(), name='exercise-detail'),
    path('<int:pk>/add-exercise/', views.add_exercise_to_routine, name='add-exercise-to-routine'),
    path('<int:pk>/remove-exercise/', views.remove_exercise_from_routine, name='remove-exercise-from-routine'),
]
