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
    data = serializers.serialize('json', persona.objects.filter())
    return HttpResponse(data, content_type='application/json; charset=utf-8')

def new_personas_view(request):
    return render_to_response('persona/new_persona.html',
                              context_instance=RequestContext(request),
                             )
  
def new_personas_json(request):
    data = serializers.serialize('json', persona.objects.filter(id=1))
    if request.method == 'POST':      
        if(True):
            some_data_to_dump = {
                'respuesta': True,
                'mensaje': 'Todo Bien',
            }
        else:
            some_data_to_dump = {
                'respuesta': False,
                'mensaje': 'Formulario Mal',
            } 
        data = json.dumps(some_data_to_dump)
    return HttpResponse(data,content_type='application/json; charset=utf-8')

def edit_personas_view(request):
    return render_to_response('persona/edit_persona.html',
                              context_instance=RequestContext(request),
                             )

def delete_personas_view(request):
    return render_to_response('persona/delete_persona.html',
                              context_instance=RequestContext(request),
                             )