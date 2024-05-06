import React, { useState } from 'react';
import axios from 'axios';

function Journey() {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:3000/api/journeys', { startPoint, endPoint })
      .then(response => {
        alert(`Journey started! ID: ${response.data.id}`);
      })
      .catch(error => {
        const message = error.response ? error.response.data : error.message;
        alert('Failed to start journey: ' + message);
      });
  };

  return (
    <div>
      <h2>Journey Planner</h2>
      <input type="text" placeholder="Start Point" value={startPoint} onChange={e => setStartPoint(e.target.value)} />
      <input type="text" placeholder="End Point" value={endPoint} onChange={e => setEndPoint(e.target.value)} />
      <button onClick={handleSubmit}>Start Journey</button>
    </div>
  );
}

export default Journey;

