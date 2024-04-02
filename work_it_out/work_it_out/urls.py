"""
URL configuration for work_it_out project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.http import HttpResponse
from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views
import os
from django.conf import settings
from django.conf.urls.static import static
from account.views import get_user_id

def serve_image(request, image_name):
    image_path = os.path.join(settings.MEDIA_ROOT, 'exercise_images', image_name)
    
    if os.path.exists(image_path):
        with open(image_path, 'rb') as image_file:
            return HttpResponse(image_file.read(), content_type='image/jpeg')
    else:
        return HttpResponse(status=404)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include("account.urls", namespace="account")),
    path('exercises/', include("exercises.urls", namespace="exercises")),
    path('routines/', include("routines.urls", namespace="routines")),
    path('get-user-id/', get_user_id, name='get_user_id'),
    path('image/<str:image_name>/', serve_image, name='serve_image'),
    path('auth/', include('django.contrib.auth.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

