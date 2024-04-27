import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

function NavigationStatus() {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

    useEffect(() => {
        axios.get('/api/navigation/location')
            .then(response => setLocation(response.data))
            .catch(error => console.error('Error fetching location:', error));
    }, []);

    return (
        <Card raised style={{ backgroundColor: "#ffffff", margin: "16px" }}>
            <CardContent>
                <Typography variant="h5" component="h2" style={{ color: "#1976d2" }}>
                    Current Location
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Latitude: {location.latitude}
                    <br />
                    Longitude: {location.longitude}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default NavigationStatus;