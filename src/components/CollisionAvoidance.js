import React from 'react';

function CollisionAvoidance() {
    return (
        <div>
            <h2>Collision Avoidance</h2>
            <button onClick={() => alert('Scanning for obstacles...')}>Scan for Obstacles</button>
            <button onClick={() => alert('Setting avoidance strategy...')}>Set Avoidance Strategy</button>
        </div>
    );
}

export default CollisionAvoidance;