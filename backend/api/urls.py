from django.urls import path
from .views import VnetCreateView

urlpatterns = [
    path('vnet/', VnetCreateView.as_view(), name='vnet-create'),
]