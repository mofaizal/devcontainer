
To create your first React.js project and a form to input values for VNET name, Address Space, Resource Group, Location, and Project name, follow these steps:

### Step 1: Create a New React Project

Open your terminal and run the following commands:

```bash
npx create-react-app my-first-react-app
cd my-first-react-app
npm start
```

### Step 2: Create the Form Component

Create a new file named `VnetForm.js` in the `src` directory with the following content:

```javascript
import React, { useState } from 'react';

const VnetForm = () => {
  const [formData, setFormData] = useState({
    vnetName: '',
    addressSpace: '',
    resourceGroup: '',
    location: '',
    projectName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
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
        <input type="text" name="

location

" value={formData.location} onChange={handleChange} />
      </div>
      <div>
        <label>Project Name:</label>
        <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default VnetForm;
```

### Step 3: Use the Form Component in Your App

Replace the content of `src/App.js` with the following:

```javascript
import React from 'react';
import './App.css';
import VnetForm from './VnetForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>VNET Form</h1>
        <VnetForm />
      </header>
    </div>
  );
}

export default App;
```

### Step 4: Run Your Application

Make sure your development server is running. If it isn't, start it with:

```bash
npm start
```

You should now see a form in your browser where you can input values for VNET name, Address Space, Resource Group, Location, and Project name.

Next Step >>> Add Style Sheet to input form
