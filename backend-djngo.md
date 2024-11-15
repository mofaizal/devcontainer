
Open new Terminal 

Root folder 

1. Create a new Django project and app

```
django-admin startproject backend
cd backend
django-admin startapp api

```

2. Add rest_framework and myapp to INSTALLED_APPS in backend/settings.py:

Add following in to INSTALLED_APPS

```
INSTALLED_APPS = [
    ...
    'rest_framework',
    'api',
]
```

3. Create a model in api/models.py:

```
from django.db import models

class Vnet(models.Model):
    vnet_name = models.CharField(max_length=100)
    address_space = models.CharField(max_length=100)
    resource_group = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    project_name = models.CharField(max_length=100)

```
4. Create a serializer in api/serializers.py:

```
from rest_framework import serializers
from .models import Vnet

class VnetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vnet
        fields = '__all__'

```

5. Create a view in api/view

```
from rest_framework import generics
from .models import Vnet
from .serializers import VnetSerializer

class VnetCreateView(generics.CreateAPIView):
    queryset = Vnet.objects.all()
    serializer_class = VnetSerializer
```

6. Add a URL pattern in api/urls.py:

```
from django.urls import path
from .views import VnetCreateView

urlpatterns = [
    path('vnet/', VnetCreateView.as_view(), name='vnet-create'),
]
```

7. Include the app URLs in backend/urls.py:

```
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
```

8. Run migrations and start the server:

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

GO To React Js folder 

9. Install Axios for making HTTP requests:

```
npm install axios
```

10. Update VnetForm.js to submit the form and display the results:

```js
import React, { useState } from 'react';
import axios from 'axios';
import './VnetForm.css';

const VnetForm = () => {
  const [formData, setFormData] = useState({
    vnetName: '',
    addressSpace: '',
    resourceGroup: '',
    location: '',
    projectName: ''
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/vnet/', formData);
      setResponse(res.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>VNET Name:</label>
          <input type="text" name="vnetName" value={formData.vnetName} onChange={handleChange} />
        </div>
        <div>
          <label>Address Space:</label>
          <input type="text" name="addressSpace" value={formData.addressSpace} onChange={handleChange} />
        </div>
        <div>
          <label>Resource Group:</label>
          <input type="text" name="resourceGroup" value={formData.resourceGroup} onChange={handleChange} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div>
          <label>Project Name:</label>
          <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default VnetForm;
```

Update following settting backend\backend\settings.py

```
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    # Add other origins as needed
]
```

11. Run Your Application

Run Django server and React development serv

```
python manage.py runserver
```
```
npm start
```

