from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import redirect, render

from .forms import LoginForm, ProfileEditForm, UserEditForm, UserRegistrationForm
from .models import Profile


def welcome(request):
    return render(request, 'account/welcome.html', {'section': 'welcome'})


def register_done(request):
    return render(request, 'account/register_done.html')


def register(request):
    if request.method == 'POST':
        user_form = UserRegistrationForm(request.POST)
        if user_form.is_valid():
            new_user = user_form.save(commit=False)
            new_user.set_password(user_form.cleaned_data['password'])
            new_user.save()
            Profile.objects.create(user=new_user)
            return redirect('account:register_done')
    else:
        user_form = UserRegistrationForm()
    return render(request, 'account/register.html', {'user_form': user_form})


@login_required
def edit(request):
    if request.method == 'POST':
        user_form = UserEditForm(instance=request.user, data=request.POST)
        profile_form = ProfileEditForm(
            instance=request.user.profile, data=request.POST, files=request.FILES
        )
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
    else:
        user_form = UserEditForm(instance=request.user)
        profile_form = ProfileEditForm(instance=request.user.profile)
    return render(
        request, 'account/edit.html', {'user_form': user_form, 'profile_form': profile_form}
    )


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request, username=cd['username'], password=cd['password'])
        if user is not None:
            if user.is_active:
                login(request, user)
                return redirect('account:profile')
            else:
                return HttpResponse('Disabled account')
        else:
            return HttpResponse('Invalid login')
    else:
        form = LoginForm()
    return render(request, 'registration/login.html', {'form': form})


@login_required
def view_profile(request):
    user = request.user
    profile = Profile.objects.get(user=user)

    context = {
        'user': user,
        'profile': profile,
    }

    return render(request, 'account/profile.html', context)
