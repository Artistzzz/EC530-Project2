# Self-Driving Robot Project
<br>

## Project Overview
The primary purpose of this project is to develop a comprehensive system for a self-driving robot that includes managing journeys and handling collision avoidance dynamically. This involves setting up routes, monitoring the robot's path, and ensuring it can detect and react to obstacles in its environment.
<br>

## Key Components
 - **Backend Server (Node.js/Express)**
    - **API for Journey Management:**
    - Create Journey: Users can define a journey with a start and end point. This is handled via a POST request that creates a new journey entry.
    - Retrieve Journey: Users can fetch details of existing journeys using a GET request.
    - Update Journey: The status of ongoing journeys can be updated (e.g., from 'In Progress' to 'Completed') via a PUT request.
      
    - **API for Collision Avoidance:**
    - Scan for Obstacles: Simulates the detection of obstacles, providing mock data about obstacles detected in the robot's path.
    - Set Avoidance Strategy: Allows setting different strategies for avoiding detected obstacles (e.g., stop, evade).
      
 - **Frontend Application (React)**
    - Structure for all the other models which can be implemented later.
    - Journey Module: Allows users to input start and end points for a journey and displays status updates.
    - Collision Avoidance Module: Provides buttons to initiate an obstacle scan and set avoidance strategies, with real-time feedback on the operations performed.
<br>


