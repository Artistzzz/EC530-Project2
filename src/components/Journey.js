import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

function Journey() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = () => {
    axiosInstance.post('/api/journey/start', { start, end })
      .then(response => alert('Journey started!'))
      .catch(error => alert('Failed to start journey: ' + error.message));
  };

  return (
    <div>
      <h2>Journey Planner</h2>
      <input type="text" placeholder="Start Point" value={start} onChange={e => setStart(e.target.value)} />
      <input type="text" placeholder="End Point" value={end} onChange={e => setEnd(e.target.value)} />
      <button onClick={handleSubmit}>Start Journey</button>
    </div>
  );
}

export default Journey;
