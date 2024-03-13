from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path

from . import views

app_name = 'account'

urlpatterns = [
    # path('login/', views.user_login, name="login"),
    # path('auth/', include('django.contrib.auth.urls')),
    # path('register/', views.register, name='register'),
    # path('edit/', views.edit, name='edit'),
    # path('profile/', views.view_profile, name='profile'),
    # path('', include('django.contrib.auth.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
