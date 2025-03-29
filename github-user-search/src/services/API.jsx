// src/services/API.jsx
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com',
});

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await API.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
