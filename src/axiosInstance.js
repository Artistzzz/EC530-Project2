import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001' // Adjust as necessary
});
export default axiosInstance;
