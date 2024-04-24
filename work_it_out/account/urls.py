from django.urls import path

from . import views

app_name = 'account'

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.UserLoginAPIView.as_view(), name="login"),
    path('profile/<int:user_id>/', views.ViewProfileAPIView.as_view(), name='profile'),
    path('edit_profile/', views.EditProfileAPIView.as_view(), name='profile'),
    path('logout/', views.UserLogoutAPIView.as_view(), name='logout'),
]
