from django.urls import path

from . import views

app_name = 'account'

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('edit/', views.EditAPIView.as_view(), name='edit'),
    path('login/', views.UserLoginAPIView.as_view(), name="login"),
    path('profile/', views.ViewProfileAPIView.as_view(), name='profile'),
]
