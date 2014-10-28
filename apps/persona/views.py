from django.shortcuts import render_to_response, get_object_or_404
from django.http import HttpResponse
from django.core import serializers
from django.template import RequestContext

import json

from .models import Persona
from .models import Domicilio


# Create your views here.

def list_personas_view(request):
    return render_to_response('persona/list_persona.html',
                              context_instance=RequestContext(request),
                              )

def new_personas_view(request):
    return render_to_response('persona/new_persona.html',
                              context_instance=RequestContext(request),
                              )

def edit_personas_view(request, persona_dni):
    return render_to_response('persona/edit_persona.html',
                              context_instance=RequestContext(request),
                              )

def delete_personas_view(request, persona_dni):
    return render_to_response('persona/delete_persona.html',
                              context_instance=RequestContext(request),
                              )


# Vistas JSON

def new_personas_json(request):
    data = ""
    if request.method == 'POST':        
        p = Persona()
        p.dni = request.POST.__getitem__("dni")
        p.nombre = request.POST.__getitem__("nombre")
        p.apellido = request.POST.__getitem__("apellido")
        p.save()
        if(True):
            some_data_to_dump = {
                'respuesta': True,
                'mensaje': 'Se realizó el guardado de manera correcta',
            }
        else:
            some_data_to_dump = {
                'respuesta': False,
                'mensaje': 'Ocurrió un error al realizar el guardado. Revise los valores ingresados.',
            }
        data = json.dumps(some_data_to_dump)
    return HttpResponse(data,content_type='application/json; charset=utf-8')

def list_personas_json(request):
    data = serializers.serialize('json', Persona.objects.all())
    return HttpResponse(data, content_type='application/json; charset=utf-8')

def view_personas_json(request, persona_dni):
    persona = get_object_or_404(Persona, pk=persona_dni)
    data = serializers.serialize('json', [persona, persona.domicilio, persona.domicilio.localidad, persona.domicilio.localidad.provincia])
    return HttpResponse(data, content_type='application/json; charset=utf-8')

def edit_personas_json(request, persona_dni):
    persona = get_object_or_404(Persona, pk=persona_dni)
    data = serializers.serialize('json', [persona])
    return HttpResponse(data,content_type='application/json; charset=utf-8')

def delete_personas_json(request, persona_dni):
    persona = get_object_or_404(Persona, pk=persona_dni)
    data = serializers.serialize('json', [persona])
    return HttpResponse(data, content_type='application/json; charset=utf-8')
