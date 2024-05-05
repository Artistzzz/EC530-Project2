# Self-Driving Robot Project

## Project Overview
This project involves the development of a self-driving robot that can autonomously navigate environments and make real-time decisions based on sensory input. The system integrates a suite of sensors and modules via a robust backend API, enabling the robot to perform complex navigation and obstacle avoidance tasks. The project's architecture supports modularity and scalability, allowing for enhancements like additional sensors and improved decision-making algorithms.

### Key Features
- **Authentication and Authorization Module:** Secures the system using JWT-based authentication, ensuring that only authorized users can access certain API endpoints. This module helps maintain the integrity and security of the robot's operational data.- **Camera Module:** Employs visual processing to detect and interpret the surroundings, crucial for object recognition and environmental understanding. This module feeds data into both the navigation and collision avoidance systems.
- **LiDAR Module:** Utilizes light detection and ranging to generate precise, three-dimensional information about the robot's immediate environment. This data is critical for accurate navigation and effective obstacle avoidance.
- **Navigation Module:** Manages route planning and tracking. It uses data from various sensors to calculate the most efficient paths to designated targets while avoiding obstacles detected by the LiDAR and camera systems.
- **Collision Avoidance Detection Module:** Processes sensor data to identify potential hazards and calculates avoidance maneuvers, ensuring the robot navigates safely without collisions.
- **Sensor Data Queue:** Implements an asynchronous message queuing system using RabbitMQ to handle high volumes of sensor data. This system decouples data collection from processing, enhancing the system’s ability to scale and maintain high performance under various operational loads.
- **Monitoring Module:** Provides real-time monitoring of the robot’s systems and components, alerting users to potential issues and ensuring ongoing maintenance is handled promptly.
- **Wheel Module:** Controls the robot's movements based on computed navigation paths and collision avoidance data, adjusting the speed and steering to navigate the robot smoothly and accurately.
