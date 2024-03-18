from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import  ProfileSerializer, UserSerializer,LoginFormSerializer

from django.contrib.auth import authenticate, login
from django.shortcuts import redirect

from .forms import LoginForm, ProfileEditForm, UserEditForm, UserRegistrationForm
from .models import Profile


class WelcomeAPIView(APIView):
    def get(self, request):
        return Response({'section': 'welcome'})



class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({'user': user.email}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        user_form = UserEditForm(instance=request.user, data=request.data)
        profile_form = ProfileEditForm(
            instance=request.user.profile, data=request.data, files=request.FILES
        )
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            return Response(status=status.HTTP_200_OK)
        return Response({'error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    def post(self, request):
        form = LoginForm(request.data)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request, username=cd['username'], password=cd['password'])
            if user is not None and user.is_active:
                login(request, user)
                return redirect('account:profile')
        return Response({'error': 'Invalid login'}, status=status.HTTP_400_BAD_REQUEST)


class ViewProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        profile = Profile.objects.get(user=user)
        data = {
            'user': user.username,
            'email': user.email,
            'profile_picture': profile.profile_picture.url if profile.profile_picture else None
        }
        return Response(data, status=status.HTTP_200_OK)
