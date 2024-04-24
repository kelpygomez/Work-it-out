from django.urls import path

from . import views

app_name = "tracker"

urlpatterns = [
    path('', views.WeekListCreateAPIView.as_view(), name='week-list-create'),
    # path('<int:pk>/<int:day>/<int:routine_id>/register_routine', views.)
    # path('<int:pk>/<int:day>/<int:routine_id>/deregister_routine', views.)
]
