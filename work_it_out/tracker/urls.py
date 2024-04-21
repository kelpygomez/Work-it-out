from django.urls import path

from . import views

app_name = "tracker"

urlpatterns = [
    path('', views.WeekListCreateAPIView.as_view(), name='week-list-create'),
    path(
        '<int:pk>/',
        views.WeekRetrieveUpdateDestroyAPIView.as_view(),
        name='week-retrieve-update-destroy',
    ),
    # Otras URLs según sea necesario
]
