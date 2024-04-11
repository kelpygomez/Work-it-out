from django.contrib.auth import authenticate, logout
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import BlacklistMixin, RefreshToken

from .models import Profile
from .serializers import ProfileRegisterSerializer, ProfileSerializer, UserSerializer

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

    permission_classes = [AllowAny]

    def post(self, request):
        user_data = request.data.get('user')
        if user_data:
            username = user_data.get('username')
            password = user_data.get('password')
            user = authenticate(username=username, password=password)

            if user is not None:
                refresh = RefreshToken.for_user(user)
                return Response(
                    {
                        'refresh': str(refresh),
                        'access': str(refresh.access_token),
                    },
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED
                )
        else:
            return Response({'error': 'Invalid request data'}, status=status.HTTP_400_BAD_REQUEST)


class UserLogoutAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class ViewProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.is_authenticated:
            profile = Profile.objects.get(user=request.user)
            serializer = ProfileSerializer(profile)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Usuario no autenticado'}, status=status.HTTP_401_UNAUTHORIZED
            )

    def put(self, request, partial=True):
        if request.user.is_authenticated:
            profile = Profile.objects.get(user=request.user)
            serializer = ProfileSerializer(profile, data=request.data)
            print(request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response(
                {'error': 'Usuario no autenticado'}, status=status.HTTP_401_UNAUTHORIZED
            )
