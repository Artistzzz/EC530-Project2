import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

function CollisionControl() {
    const handleAvoid = () => {
        axios.post('/api/collision/avoid', { obstacleId: '123' })
            .then(response => alert(response.data.message))
            .catch(error => console.error('Error avoiding obstacle:', error));
    };

    return (
        <Card raised style={{ backgroundColor: "#ffffff", margin: "16px" }}>
            <CardContent>
                <Typography variant="h5" component="h2" style={{ color: "#1976d2" }}>
                    Collision Control
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ marginBottom: "20px" }}>
                    Initiate an obstacle avoidance maneuver.
                </Typography>
                <Button variant="contained" color="primary" onClick={handleAvoid}>
                    Avoid Obstacle
                </Button>
            </CardContent>
        </Card>
    );
}

export default CollisionControl;