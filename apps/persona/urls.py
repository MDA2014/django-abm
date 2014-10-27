from django.conf.urls import patterns, url

from . import views


urlpatterns = patterns('',
    url(
        regex = r'^$',
        view  = views.list_personas_view,
        name  = 'index_personas'
    ),
    url(
        regex = r'^json/$',
        view  = views.list_personas_json,
        name  = 'index_personas_json'
    ),
    url(
        regex = r'^json/view/(?P<persona_id>[\d]+)/$',
        view  = views.view_personas_json,
        name  = 'view_personas_json'
    ),
    url(
        regex = r'^new/$',
        view  = views.new_personas_view,
        name  = 'new_persona'
    ),
    url(
        regex = r'^json/new/$',
        view  = views.new_personas_json,
        name  = 'new_personas_json'
    ),
    url(
        regex = r'^edit/(?P<persona_id>[\d]+)/$',
        view  = views.edit_personas_view,
        name  = 'edit_persona'
    ),
    url(
        regex = r'^json/edit/(?P<persona_id>[\d]+)/$',
        view  = views.edit_personas_json,
        name  = 'edit_personas_json'
    ),
    url(
        regex = r'^delete/(?P<persona_id>[\d]+)/$',
        view  = views.delete_personas_view,
        name  = 'delete_persona'
    ),
    url(
        regex = r'^json/delete/(?P<persona_id>[\d]+)/$',
        view  = views.delete_personas_json,
        name  = 'delete_personas_json'
    ),
)
