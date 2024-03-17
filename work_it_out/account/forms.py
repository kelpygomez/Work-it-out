from django import forms
from django.contrib.auth.models import User

from .models import Profile


class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Repeat password', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']

    def clean_password2(self):
        cd = self.cleaned_data
        if cd['password'] != cd['password2']:
            self.add_error("password2", "Passwords don't match")


class UserEditForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']


class ProfileEditForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['birthdate', 'photo', 'height', 'weight']
        widgets = {
            'birthdate': forms.DateInput(
                attrs={'class': 'form-control', 'placeholder': 'Date of Birth', 'type': 'date'}
            ),
            'photo': forms.ClearableFileInput(
                attrs={'class': 'custom-file-input', 'id': 'customFile'}
            ),
            'height': forms.NumberInput(
                attrs={'class': 'form-control', 'placeholder': 'Height in centimeters'}
            ),
            'weight': forms.NumberInput(
                attrs={'class': 'form-control', 'placeholder': 'Weight in kilograms'}
            ),
        }

    def clean_photo(self):
        photo = self.cleaned_data['photo']
        if photo:
            max_size = 5 * 1024 * 1024
            if photo.size > max_size:
                raise forms.ValidationError('File size must be no more than 5 MB.')
        return photo


class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
