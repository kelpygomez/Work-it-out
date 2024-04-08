from django.urls import path

from .views import (
    EditAPIView,
    RegisterView,
    UserLoginAPIView,
    UserLogoutAPIView,
    ViewProfileAPIView,
)

app_name = 'account'
urlpatterns = [
    path('profile/', ViewProfileAPIView.as_view(), name='profile-detail'),
    path('profile/edit/', EditAPIView.as_view(), name='profile-edit'),
    path('user/register/', RegisterView.as_view(), name='user-register'),
    path('user/login/', UserLoginAPIView.as_view(), name='user-login'),
    path('logout/', UserLogoutAPIView.as_view(), name='user-logout'),
]
