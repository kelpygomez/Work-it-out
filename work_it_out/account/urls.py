from django.urls import path

from .views import RegisterView, UserLoginAPIView, UserLogoutAPIView, ViewProfileAPIView

app_name = 'account'
urlpatterns = [
    path('profile/', ViewProfileAPIView.as_view(), name='profile'),
    path('register/', RegisterView.as_view(), name='user-register'),
    path('login/', UserLoginAPIView.as_view(), name='user-login'),
    path('logout/', UserLogoutAPIView.as_view(), name='user-logout'),
]
