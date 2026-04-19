// src/Test.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Test = () => {
  const testAPI = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/test');
      toast.success('API Connected!');
    } catch (error) {
      toast.error('API Connection Failed');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>✅ React App Working!</h1>
      <button onClick={() => toast.success('Hello Kolkata!')}>
        Test Toast
      </button>
      <button onClick={testAPI} style={{ marginLeft: '1rem' }}>
        Test API
      </button>
      <Toaster />
    </div>
  );
};

export default Test;