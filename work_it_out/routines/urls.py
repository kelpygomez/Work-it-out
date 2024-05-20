from django.urls import path
from . import views

app_name = 'routines'

urlpatterns = [
    path('user/<int:user_id>/', views.RoutineList.as_view(), name='user_routines_list'),
    path('<int:routine_id>/', views.RoutineDetail.as_view(), name='routine-detail'),
    path('edit/<int:pk>/', views.EditRoutineAPIView.as_view(), name='routine-edit'),
    path('delete/<int:pk>/', views.delete_routine, name='routine-delete'),
    path('<int:routine_id>/add-exercise/', views.add_exercise_to_routine, name='add-exercise-to-routine'),
    path('<int:routine_id>/remove-exercise/', views.remove_exercise_from_routine, name='remove-exercise-from-routine'),
    path('create/<int:user_id>/', views.RoutineCreateAPIView .as_view(), name='routine-create'),
]
