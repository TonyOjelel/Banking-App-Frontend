// authenticationApi.js
import axios from 'axios';

export function login(credentials) {
  return axios.post('/api/auth/login', credentials);
}

export function register(userData) {
  return axios.post('/api/auth/register', userData);
}

// Additional functions for logout, password reset, etc.
