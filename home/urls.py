from django.urls import path
from . import views
from django.contrib.auth.views import LoginView
urlpatterns = [
    path('',views.view),
]
