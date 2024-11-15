from django.db import models

class Vnet(models.Model):
    vnet_name = models.CharField(max_length=100)
    address_space = models.CharField(max_length=100)
    resource_group = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    project_name = models.CharField(max_length=100)
