// apiUtils.js
import axios from 'axios';

export function get(endpoint) {
  return axios.get(endpoint);
}

export function post(endpoint, data) {
  return axios.post(endpoint, data);
}

// Additional utility functions for handling responses, error handling, etc.
