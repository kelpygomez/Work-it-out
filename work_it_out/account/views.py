from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import status, generics
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from routines.models import Routine
from .models import Profile
from .serializers import (
    LoginFormSerializer,
    ProfileRegisterSerializer,
    ProfileSerializer,
    UserSerializer,
)

'''
class WelcomeAPIView(APIView):
    def get(self, request):
        return Response({'section': 'welcome'})
'''


class RegisterView(APIView):
    def post(self, request):
        print(request.data)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            profile_data = {'user_id': user.id}
            profile_serializer = ProfileRegisterSerializer(data=profile_data)
            if profile_serializer.is_valid():
                profile_serializer.save()
                return Response({'user': user.username}, status=status.HTTP_201_CREATED)
            else:
                user.delete()
                return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EditProfile(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class EditProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        user_form = UserSerializer(instance=request.user, data=request.data)
        profile_data = request.data.copy()
        if 'photo' in request.FILES:
            profile_data['photo'] = request.FILES['photo']
        profile_form = ProfileSerializer(
            instance=request.user.profile, data=profile_data, partial=True
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
                refresh = RefreshToken.for_user(user)
                return Response(
                    {
                        'user': user.username,
                        'refresh': str(refresh),
                        'access': str(refresh.access_token),
                    },
                    status=status.HTTP_201_CREATED,
                )
        return Response({'error': 'Invalid login'}, status=status.HTTP_400_BAD_REQUEST)


class UserLogoutAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class ViewProfileAPIView(RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get(self, request, user_id):
        user = get_object_or_404(User, id=user_id)
        profile = get_object_or_404(Profile, user=user)
        serializer = self.serializer_class(profile)
        return Response(serializer.data)
    

class GetAmountRoutinesAPIView(APIView):

    def get(self, request, userId):
        user = get_object_or_404(User, id=userId)
        profile = get_object_or_404(Profile, user=user)
        amount_routines = Routine.objects.filter(user=profile).count()
        return Response({'amount_routines': amount_routines})
    

    
