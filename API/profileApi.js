// profileApi.js
import axios from 'axios';

export function getProfile(userId) {
  return axios.get(`/api/profiles/${userId}`);
}

export function updateProfile(userId, profileData) {
  return axios.put(`/api/profiles/${userId}`, profileData);
}

// Additional functions for uploading profile picture, fetching user transactions, etc.
