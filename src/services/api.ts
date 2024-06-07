// arquivo para integração da api

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // URL base para o backend
});

export default api;

