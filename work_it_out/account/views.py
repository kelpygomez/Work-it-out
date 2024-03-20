from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Profile
from .serializers import LoginFormSerializer, ProfileSerializer, UserSerializer

'''
class WelcomeAPIView(APIView):
    def get(self, request):
        return Response({'section': 'welcome'})
'''


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({'user': user.username}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user_form = UserSerializer(instance=request.user, data=request.data)
        profile_form = ProfileSerializer(
            instance=request.user.profile, data=request.data, files=request.FILES
        )
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            return Response(status=status.HTTP_200_OK)
        return Response({'error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    def post(self, request):
        form = LoginFormSerializer(data=request.data)
        if form.is_valid():
            username = form.validated_data.get('username')
            password = form.validated_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None and user.is_active:
                login(request, user)
                return Response({'user': user.username}, status=status.HTTP_201_CREATED)
        return Response({'error': 'Invalid login'}, status=status.HTTP_400_BAD_REQUEST)


class ViewProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        profile = Profile.objects.get(user=user)
        data = {
            'user': user.username,
            'email': user.email,
            'profile_picture': profile.profile_picture.url if profile.profile_picture else None,
        }
        return Response(data, status=status.HTTP_200_OK)
