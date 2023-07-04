// accountApi.js
import axios from 'axios';

export function getAccount(id) {
  return axios.get(`/api/accounts/${id}`);
}

export function createAccount(accountData) {
  return axios.post('/api/accounts', accountData);
}

// Additional functions for updating account, deleting account, etc.
