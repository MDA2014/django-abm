from django.conf.urls import patterns, include, url
from django.contrib import admin

from django.views.defaults import *
import settings


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_abm.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    
    url(r'^media/(?P<path>.*)$','django.views.static.serve',{'document_root': settings.MEDIA_ROOT}),
    
    url(r'^', include('apps.home.urls', namespace='home', app_name='home')),
    url(r'^persona/', include('apps.persona.urls', namespace='persona', app_name='persona')),
)
