from django.contrib import admin

from .models import Persona, Domicilio, Localidad, Provincia

# Register your models here.

admin.site.register(Persona)
admin.site.register(Domicilio)
admin.site.register(Localidad)
admin.site.register(Provincia)
