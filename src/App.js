import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Wheels from './components/Wheels';
import LiDAR from './components/LiDAR';
import ObstacleDetection from './components/ObstacleDetection';
import Camera from './components/Camera';
import VisualObjectDetection from './components/VisualObjectDetection';
import Monitoring from './components/Monitoring';
import PathPlanning from './components/PathPlanning';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CollisionAvoidance from './components/CollisionAvoidance';
import Journey from './components/Journey'; // Make sure to import the Journey component
import './App.css';

function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);

    return (
        <Router>
            <div className="App">
                <h1>Self-Driving Robot Control Panel</h1>
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/wheels" className="nav-link">Wheels</Link>
                    <Link to="/lidar" className="nav-link">LiDAR</Link>
                    <Link to="/obstacle-detection" className="nav-link">Obstacle Detection</Link>
                    <Link to="/camera" className="nav-link">Camera</Link>
                    <Link to="/visual-object-detection" className="nav-link">Visual Object Detection</Link>
                    <Link to="/monitoring" className="nav-link">Monitoring</Link>
                    <Link to="/path-planning" className="nav-link">Path Planning</Link>
                    <Link to="/collision-avoidance" className="nav-link">Collision Avoidance</Link>
                    <Link to="/journey" className="nav-link">Journey</Link>  
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login onLogin={() => setAuthenticated(true)} />} />
                    <Route path="/wheels" element={<Wheels />} />
                    <Route path="/lidar" element={<LiDAR />} />
                    <Route path="/obstacle-detection" element={<ObstacleDetection />} />
                    <Route path="/camera" element={<Camera />} />
                    <Route path="/visual-object-detection" element={<VisualObjectDetection />} />
                    <Route path="/monitoring" element={<Monitoring />} />
                    <Route path="/path-planning" element={<PathPlanning />} />
                    <Route path="/collision-avoidance" element={<CollisionAvoidance />} />
                    <Route path="/journey" element={<Journey />} />  
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
