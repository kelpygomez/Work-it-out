from django.urls import path
from . import views

urlpatterns = [
    path('exercises/', views.ExerciseListView.as_view(), name='exercise-list'),
    path('exercises/<int:pk>/', views.ExerciseDetailView.as_view(), name='exercise-detail'),
]
