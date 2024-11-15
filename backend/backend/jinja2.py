from jinja2 import Environment, FileSystemLoader
from django.conf import settings
import os

def environment(**options):
    options['loader'] = FileSystemLoader([os.path.join(settings.BASE_DIR, 'jinja2')])
    env = Environment(**options)
    return env