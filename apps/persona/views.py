from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.core import serializers
from django.template import RequestContext

import json

from .models import Persona


# Create your views here.

def list_personas_view(request):
    return render_to_response('persona/list_persona.html',
                              context_instance=RequestContext(request),
                             )

def list_personas_json(request):
    data = serializers.serialize('json', Persona.objects.filter())
    return HttpResponse(data, content_type='application/json; charset=utf-8')

def view_personas_json(request, persona_id):
    data = serializers.serialize('json', Persona.objects.filter(id = persona_id))
    return HttpResponse(data, content_type='application/json; charset=utf-8')

def new_personas_view(request):
    return render_to_response('persona/new_persona.html',
                              context_instance=RequestContext(request),
                             )

def new_personas_json(request):
    data = ""
    if request.method == 'POST':
        p = Persona()
        p.nombre = request.POST.__getitem__("nombre")
        p.apellido = request.POST.__getitem__("apellido")
        p.edad = request.POST.__getitem__("edad")
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

def edit_personas_view(request, persona_id):
    return render_to_response('persona/edit_persona.html',
                              context_instance=RequestContext(request),
                             )
def edit_personas_json(request, persona_id):
    data = serializers.serialize('json', Persona.objects.filter(id = persona_id))
    return HttpResponse(data,content_type='application/json; charset=utf-8')

def delete_personas_view(request, persona_id):
    return render_to_response('persona/delete_persona.html',
                              context_instance=RequestContext(request),
                             )

def delete_personas_json(request, persona_id):
    data = serializers.serialize('json', Persona.objects.filter(id = persona_id))
    return HttpResponse(data, content_type='application/json; charset=utf-8')
