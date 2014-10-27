from django.db import models

# Create your models here.

class Persona(models.Model):
    # Atributos
    dni       = models.IntegerField('DNI', primary_key=True)
    nombre    = models.CharField(max_length=50)
    apellido  = models.CharField(max_length=50)
    # Relaciones
    domicilio = models.ForeignKey('Domicilio')
    # Métodos
    def __str__(self):
        return "%s %s" % (self.nombre, self.apellido)

class Domicilio(models.Model):
    # Atributos
    calle     = models.CharField(max_length=50)
    numero    = models.PositiveSmallIntegerField('número')
    # Relaciones
    localidad = models.ForeignKey('Localidad')
    # Métodos
    def __str__(self):
        return "%s %s, %s" % (self.calle, self.numero, self.localidad)

class Localidad(models.Model):
    # Atributos
    nombre    = models.CharField(max_length=50)
    # Relaciones
    provincia = models.ForeignKey('Provincia')
    # Métodos
    def __str__(self):
        return "%s, %s" % (self.nombre, self.provincia)
    # Información de clase
    class Meta:
        verbose_name_plural = 'localidades'

class Provincia(models.Model):
    # Atributos
    nombre = models.CharField(max_length=50)
    # Métodos
    def __str__(self):
        return "%s" % (self.nombre)
