import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

// Handles user authentication and token storage.
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/login', { username, password });
            localStorage.setItem('token', response.data.access_token);
            onLogin(true);
        } catch (error) {
            alert('Login failed!');
            onLogin(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
