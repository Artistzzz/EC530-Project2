import React from 'react';
import axiosInstance from '../axiosInstance';

//This component facilitates the addition of a LiDAR system to the robot, and potentially requesting depth data if that feature is implemented in the API.
function LiDAR() {
  const handleAddLiDAR = () => {
    axiosInstance.post('/api/lidar/add', { model: 'LX-30', range: '200m', resolution: 'high' })
      .then(response => alert('LiDAR added!'))
      .catch(error => alert('Failed to add LiDAR: ' + error.message));
  };

  const handleRequestDepthData = () => {
    axiosInstance.get('/api/lidar/request-depth')
      .then(response => alert('Depth data: ' + JSON.stringify(response.data)))
      .catch(error => alert('Failed to request depth data: ' + error.message));
  };

  return (
    <div>
      <h2>LiDAR Control</h2>
      <button onClick={handleAddLiDAR}>Add LiDAR</button>
      <button onClick={handleRequestDepthData}>Request Depth Data</button>
    </div>
  );
}

export default LiDAR;
