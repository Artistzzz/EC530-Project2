import React from 'react';
import axiosInstance from '../axiosInstance';

function PathPlanning() {
  const handleAddPath = () => {
    axiosInstance.post('/api/path-planning/add', { strategy: 'shortest' })
      .then(response => alert('Path planning added!'))
      .catch(error => alert('Failed to add path planning: ' + error.message));
  };

  return (
    <div>
      <h2>Path Planning</h2>
      <button onClick={handleAddPath}>Add Path Planning</button>
    </div>
  );
}

export default PathPlanning;
