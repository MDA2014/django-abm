from django.db import models

# Create your models here.

class Persona(models.Model):
    # Atributos
    dni       = models.IntegerField(primary_key=True)
    nombre    = models.CharField(max_length=50)
    apellido  = models.CharField(max_length=50)
    # Relaciones
    domicilio = models.ForeignKey('Domicilio')
    # Métodos
    def __str__(self):
        return "%s %s" % (self.nombre, self.apellido)

class Domicilio(models.Model):
    # Atributos
    calle  = models.CharField(max_length=50)
    numero = models.PositiveSmallIntegerField()
    # Métodos
    def __str__(self):
        return "%s %s" % (self.calle, self.numero)
