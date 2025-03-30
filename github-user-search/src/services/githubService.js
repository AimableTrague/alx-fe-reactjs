import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/search/users?q',
});

const buildQuery = (params) => {
  let queryString = [];

  if (params.user) queryString.push(params.user);
  if (params.location) queryString.push(`location:${params.location}`);
  if (params.repos) queryString.push(`repos:>${params.repos}`);
  if (params.minRepos) queryString.push(`repos:>${params.minRepos}`);

  return queryString.join('+');
};

export const fetchUserData = async (query) => {
  try {
    const searchQuery = buildQuery(query);
    const response = await API.get(`=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
