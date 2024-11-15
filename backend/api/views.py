from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Vnet
from .serializers import VnetSerializer
from django.template.loader import get_template

class VnetCreateView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = VnetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            template = get_template('./jinja2/vnet_template.html')
            context = serializer.data
            rendered_html = template.render(context)
            return Response({'html': rendered_html}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)