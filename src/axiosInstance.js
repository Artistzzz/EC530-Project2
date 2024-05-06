import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/', // Adjust this as necessary
});

export default axiosInstance;
