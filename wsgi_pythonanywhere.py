import os
import sys

# Add your project directory to the sys.path
path = '/home/YOUR_USERNAME/astravuex_saas'
if path not in sys.path:
    sys.path.append(path)

# Set environment variables
os.environ['DJANGO_SETTINGS_MODULE'] = 'astravuex_saas.settings'
os.environ.setdefault('SECRET_KEY', 'your-secret-key-here-change-this')
os.environ.setdefault('DEBUG', 'False')

# Import Django and setup
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
