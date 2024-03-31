from django.contrib import admin
from .models import Routine

class RoutineAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'type', 'total_kcal']
    search_fields = ['name', 'type']
    list_filter = ['type']

admin.site.register(Routine, RoutineAdmin)
