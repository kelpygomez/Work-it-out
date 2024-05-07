from django.urls import path

from . import views

app_name = 'account'

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.UserLoginAPIView.as_view(), name="login"),
    path('profile/<int:user_id>/', views.ViewProfileAPIView.as_view(), name='profile'),
    path('edit_profile/<int:pk>/', views.EditProfile.as_view(), name='edit-profile'),
    path('logout/', views.UserLogoutAPIView.as_view(), name='logout'),
    path('routines_amount/<int:userId>', views.GetAmountRoutinesAPIView.as_view(), name='routines_amount'),
]
