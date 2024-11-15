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

  const [responseHtml, setResponse] = useState(null);

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
      const res = await axios.post('http://127.0.0.1:58900/api/vnet/', formData);
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
      {responseHtml && (
        <div>
          <h2>Response:</h2>
          <div dangerouslySetInnerHTML={{ __html: responseHtml }} />
        </div>
      )}
    </div>
  );
};

export default VnetForm;