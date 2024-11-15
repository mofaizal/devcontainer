from rest_framework import serializers
from .models import Vnet

class VnetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vnet
        fields = '__all__'
