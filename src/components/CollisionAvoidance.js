import React from 'react';
import axios from 'axios';

function CollisionAvoidance() {
    const handleScan = () => {
        axios.post('http://localhost:3000/api/collision/scan')
            .then(response => {
                alert(`Obstacles detected: ${JSON.stringify(response.data.obstacles)}`);
            })
            .catch(error => {
                alert('Failed to scan for obstacles: ' + error.message);
            });
    };

    const handleSetStrategy = () => {
        const strategy = prompt("Enter avoidance strategy (e.g., stop, evade):");
        if (!strategy) return;  
        axios.post('http://localhost:3000/api/collision/strategy', { strategy })
            .then(response => {
                alert(response.data.message);
            })
            .catch(error => {
                alert('Failed to set avoidance strategy: ' + error.message);
            });
    };

    return (
        <div>
            <h2>Collision Avoidance</h2>
            <button onClick={handleScan}>Scan for Obstacles</button>
            <button onClick={handleSetStrategy}>Set Avoidance Strategy</button>
        </div>
    );
}

export default CollisionAvoidance;
