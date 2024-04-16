from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Profile


class ProfileRegisterSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(source='user', queryset=User.objects.all())

    class Meta:
        model = Profile
        fields = ['user_id']


class LoginFormSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')


class UserEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = 'email'


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ['user', 'birthdate', 'photo', 'weight', 'height', 'status', 'BMI']
        read_only_fields = ['BMI']
