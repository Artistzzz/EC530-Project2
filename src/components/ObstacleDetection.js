import React from 'react';
import axiosInstance from '../axiosInstance';

//Component for managing obstacle detection sensors.
function ObstacleDetection() {
  const handleAddSensor = () => {
    axiosInstance.post('/api/obstacle-detection/add', { type: 'infrared', sensitivity: 'high' })
      .then(response => alert('Obstacle detection sensor added!'))
      .catch(error => alert('Failed to add sensor: ' + error.message));
  };

  return (
    <div>
      <h2>Obstacle Detection</h2>
      <button onClick={handleAddSensor}>Add Sensor</button>
    </div>
  );
}

export default ObstacleDetection;
