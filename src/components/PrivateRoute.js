import React from 'react';
import { Navigate } from 'react-router-dom';

// A component to protect private routes, ensuring they're only accessible to authenticated users.
const PrivateRoute = ({ children, isAuthenticated }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;