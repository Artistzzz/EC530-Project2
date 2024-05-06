import React, { useState } from 'react';
import axios from 'axios';

function Wheels() {
  const [speed, setSpeed] = useState('');
  const [direction, setDirection] = useState('');

  const handleAddWheel = () => {
    axios.post('/api/wheels/add', { type: 'standard', size: 'medium' })
      .then(response => alert('Wheel added!'))
      .catch(error => alert('Failed to add wheel: ' + error.message));
  };

  const handleSetSpeed = () => {
    axios.post('/api/wheels/set-speed', { speed })
      .then(response => alert('Speed set!'))
      .catch(error => alert('Failed to set speed: ' + error.message));
  };

  const handleSetDirection = () => {
    axios.post('/api/wheels/set-direction', { direction })
      .then(response => alert('Direction set!'))
      .catch(error => alert('Failed to set direction: ' + error.message));
  };

  return (
    <div>
      <h2>Wheels Control</h2>
      <button onClick={handleAddWheel}>Add Wheel</button>
      <div>
        <input type="text" value={speed} onChange={e => setSpeed(e.target.value)} placeholder="Set Speed" />
        <button onClick={handleSetSpeed}>Set Speed</button>
      </div>
      <div>
        <input type="text" value={direction} onChange={e => setDirection(e.target.value)} placeholder="Set Direction" />
        <button onClick={handleSetDirection}>Set Direction</button>
      </div>
    </div>
  );
}

export default Wheels;