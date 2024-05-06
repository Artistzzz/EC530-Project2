import React from 'react';
import axiosInstance from '../axiosInstance';

function Monitoring() {
  const handleGetStatus = () => {
    axiosInstance.get('/api/monitoring/status')
      .then(response => alert('Current Status: ' + JSON.stringify(response.data)))
      .catch(error => alert('Failed to get status: ' + error.message));
  };

  return (
    <div>
      <h2>System Monitoring</h2>
      <button onClick={handleGetStatus}>Get Status</button>
    </div>
  );
}

export default Monitoring;
