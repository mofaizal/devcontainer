To add a CSS stylesheet for the input form, follow these steps:

### Step 1: Create a CSS File

Create a new file named `VnetForm.css` in the `src` directory with the following content:

```css
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

div {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
```

### Step 2: Import the CSS File in the Form Component

Modify the `VnetForm.js` file to import the CSS file:

```javascript
import React, { useState } from 'react';
import './VnetForm.css';

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
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
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

### Step 3: Run Your Application

Make sure your development server is running. If it isn't, start it with:

```bash
npm start
```

You should now see a styled form in your browser where you can input values for VNET name, Address Space, Resource Group, Location, and Project name.