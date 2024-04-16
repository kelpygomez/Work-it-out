from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Profile


class ProfileRegisterSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(source='user', queryset=User.objects.all())

    class Meta:
        model = Profile
        fields = ['user_id']


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user', 'birthdate', 'photo', 'weight', 'height', 'status', 'BMI']
        read_only_fields = ['BMI']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = User.objects.create_user(**validated_data, password=password)
        return user


class LoginFormSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
