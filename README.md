# Example .devcontainer Setup
### Here's a simple setup for a Django + React project:

#### 1. Create a .devcontainer Folder:

Inside your project’s root directory, create a `.devcontainer` folder and add a `devcontainer.json` file inside it.Example `.devcontainer` Setup
Here's a simple setup for a Django + React project:

1. Create a .devcontainer Folder:

2. Inside your project’s root directory, create a .devcontainer folder and add a devcontainer.json file inside it.

```json
{
	"name": "React & Django Dev Environment",
	"image": "mcr.microsoft.com/devcontainers/universal:2",
	"hostRequirements": {
	  "cpus": 4
	},
	"waitFor": "onCreateCommand",
	"updateContentCommand": "python3 -m pip install -r requirements.txt",
	"postCreateCommand": "bash .devcontainer/post-create.sh",
	"customizations": {
	  "vscode": {
		"settings": {
		  "python.defaultInterpreterPath": "${workspaceFolder}/.venv",
		  "python.terminal.activateEnvInCurrentTerminal": true,
		  "python.terminal.launchArgs": [
			"-X",
			"dev"
		  ],
		  "editor.formatOnSave": true
		},
		"extensions": [
		  "ms-python.python",
		  "ms-toolsai.jupyter",
		  "dbaeumer.vscode-eslint",
		  "esbenp.prettier-vscode",
		  "ms-azuretools.vscode-docker"
		]
	  }
	}
  }
```

3. Create the `Dockerfile` (in the .devcontainer folder or the project root):

```dockerfile
# Use an official Python image
FROM python:3.10-slim

# Set work directory
WORKDIR /workspace

# Install node and npm for React frontend
RUN apt-get update && \
    apt-get install -y nodejs npm python3-distutils \
    sudo apt update \
    sudo apt install python3 python3-pip \
    pip3 install django djangorestframework \
    sudo apt install nodejs npm

# Copy project files
COPY . /workspace

# Install Python dependencies
RUN pip install -r requirements.txt

# Install frontend dependencies if needed
RUN cd client && npm install

# Expose ports for Django and React
EXPOSE 8000 3000

```
4. Create the `environment.yml` in the .devcontainer folder
5. Create the `post-create.sh` in the .devcontainer folder 

```shell
#!/bin/bash

# Update package list
sudo apt-get update

# Install Node.js and npm (only if Node.js isn’t pre-installed)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
sudo apt-get install -y nodejs python3-distutils

# Create and activate a Python virtual environment
python3 -m newenv .newenv
source .newenv/bin/activate

# Install Python dependencies
sudo pip install --upgrade pip
sydo pip install -r requirements.txt

# Install Node.js dependencies for React app
npm install

```

6. Create `requirements.txt`in the root folder

```
djangorestframework==3.14.0
Jinja2==3.1.2
pymongo==3.12.1
dnspython==2.1.0
celery==5.2.7
redis==4.3.4
django==3.1
djongo==1.3.6
sqlparse==0.2.4

```
6. Create file `package.json`in the root folder

```json
{
    "name": "react-app",
    "version": "1.0.0",
    "private": true,
    "dependencies": {
        "axios": "^1.4.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^5.3.4",
        "react-scripts": "^5.0.1"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}

```
8. Create file `.gitignore` in the root folder 

```
node_modules

```

7. Open the Project in VS Code and Reopen in Container
. Open your project folder in VS Code.
. When VS Code detects the .devcontainer folder, it will prompt you to “Reopen in Container.”Click this to build and open your environment in the Docker container.
. Once the container is built and running, the Django and React development servers will be accessible via ports 8000 and 3000, respectively.

8. Any issue rebuid the container

9. Open new terminal 

10. Intall Django
```
pip install django

```

11. Install Django REST Framework

```
pip install djangorestframework

```
12. Verify Installation

```
pip show djangorestframework
```

13. Install django-cors-headers

```
pip install django-cors-headers
```

>>> Next Step : Create React.JS input form(inputform.md)