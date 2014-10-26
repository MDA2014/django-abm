from django.db import models

# Create your models here.

class Persona(models.Model):
    # Atributos
    dni      = models.IntegerField(primary_key=True)
    nombre   = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    # Métodos
    def __str__(self):
    	return "%s %s" % (self.nombre, self.apellido)