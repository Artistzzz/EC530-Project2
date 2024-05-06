import React from 'react';
import axiosInstance from '../axiosInstance';

// Component for managing cameras.
function Camera() {
  const handleAddCamera = () => {
    axiosInstance.post('/api/camera/add', { model: 'HD123', features: 'night vision' })
      .then(response => alert('Camera added!'))
      .catch(error => alert('Failed to add camera: ' + error.message));
  };

  return (
    <div>
      <h2>Camera System</h2>
      <button onClick={handleAddCamera}>Add Camera</button>
    </div>
  );
}

export default Camera;
