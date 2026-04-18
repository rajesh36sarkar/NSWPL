import axios from 'axios';

const api = axios.create({
  baseURL: '/api',        // This will go to backend via proxy
  timeout: 10000,
});

export default api;