const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Mock database to store journeys
let journeys = [];
let journeyId = 1;

// Mock storage for collision avoidance strategies
let currentStrategy = "none";
let obstaclesDetected = [];

// POST endpoint to start a new journey
app.post('/api/journeys', (req, res) => {
    const { startPoint, endPoint } = req.body;
    if (!startPoint || !endPoint) {
        return res.status(400).send('Start point and end point are required.');
    }

    const newJourney = {
        id: journeyId++,
        startPoint,
        endPoint,
        status: 'In Progress'
    };
    journeys.push(newJourney);

    res.status(201).json(newJourney);
});

// GET endpoint to retrieve a journey by ID
app.get('/api/journeys/:id', (req, res) => {
    const journey = journeys.find(j => j.id === parseInt(req.params.id));
    if (!journey) {
        return res.status(404).send('Journey not found.');
    }
    res.json(journey);
});

// PUT endpoint to update a journey's status
app.put('/api/journeys/:id', (req, res) => {
    const { status } = req.body;
    const journey = journeys.find(j => j.id === parseInt(req.params.id));

    if (!journey) {
        return res.status(404).send('Journey not found.');
    }

    journey.status = status || journey.status;
    res.json(journey);
});

// POST endpoint to simulate scanning for obstacles
app.post('/api/collision/scan', (req, res) => {
    // Simulate an obstacle detection process
    obstaclesDetected = [
        { id: 1, type: "static", description: "Large rock", position: { x: 5, y: 10 } },
        { id: 2, type: "dynamic", description: "Moving vehicle", position: { x: 10, y: 15 } }
    ];
    res.json({ message: "Obstacles detected", obstacles: obstaclesDetected });
});

// POST endpoint to set an avoidance strategy
app.post('/api/collision/strategy', (req, res) => {
    const { strategy } = req.body;
    if (!strategy) {
        return res.status(400).send('Strategy is required.');
    }
    currentStrategy = strategy;
    res.json({ message: `Avoidance strategy set to ${strategy}`, currentObstacles: obstaclesDetected });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

