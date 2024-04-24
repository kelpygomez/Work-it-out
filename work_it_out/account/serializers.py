from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Profile


class ProfileRegisterSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(source='user', queryset=User.objects.all())

    class Meta:
        model = Profile
        fields = ['user_id']


class ProfileSerializer(serializers.ModelSerializer):
    # Define los campos del usuario que quieres incluir en la respuesta
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')

    class Meta:
        model = Profile
        fields = ['id', 'username', 'email', 'birthdate', 'photo', 'weight', 'height', 'status']

    def to_representation(self, instance):
        # Obtén la representación del perfil
        ret = super().to_representation(instance)
        # Agrega los campos del usuario a la representación
        ret['username'] = instance.user.username
        ret['email'] = instance.user.email
        return ret


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
