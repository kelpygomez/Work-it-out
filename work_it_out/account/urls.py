from django.urls import path

from . import views

app_name = 'account'

urlpatterns = [
    path('register/', views.register, name='register'),
    path('edit/', views.edit, name='edit'),
    path('register-done/', views.register_done, name='register_done'),
    path('login/', views.user_login, name="login"),
    path('profile/', views.view_profile, name='profile'),
]
