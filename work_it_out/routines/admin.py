from django.contrib import admin
from .models import Routine

class RoutineAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'description', 'user']


admin.site.register(Routine, RoutineAdmin)
