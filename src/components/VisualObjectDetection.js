import React from 'react';
import axiosInstance from '../axiosInstance';

// Component for visual object detection.
function VisualObjectDetection() {
  const handleAddDetection = () => {
    axiosInstance.post('/api/visual-object-detection/add', { algorithm: 'CNN', accuracy: '90%' })
      .then(response => alert('Visual object detection added!'))
      .catch(error => alert('Failed to add visual object detection: ' + error.message));
  };

  return (
    <div>
      <h2>Visual Object Detection</h2>
      <button onClick={handleAddDetection}>Add Detection System</button>
    </div>
  );
}

export default VisualObjectDetection;
