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

## Future implementation
 - Fixing integration errors, to ensure connections between all backend functions and the frontend.
 - Complete implementation of all remaining modules within this project.

## Instructions For Developers
 - Each folder within the project is dedicated to a specific aspect, as indicated by its name. The "src" folder contains essential files for the front-end, while "server.js" serves as the back-end, implementing the REST API for the Collision Section Module and Navigation Module, referred to as "Journey". The "package.json" resides in the root folder and facilitates concurrent execution of the front-end and back-end. Additional files necessary for the project, originating from React and Node.js, are not included and must be obtained via the "npm install" command. It is imperative to install React and Node.js beforehand. To maintain file structure consistency, developers are advised to refer to the "projectStructure.png" located within the demo folder. Thank you for your attention.




