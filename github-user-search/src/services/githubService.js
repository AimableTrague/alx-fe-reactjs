import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/search/',
});


const buildQuery = (params) => {
  let queryString = [];

  if (params.user) queryString.push(`${params.user}`);
  if (params.location) queryString.push(`location:${params.location}`);
  if (params.repos) queryString.push(`repos:>${params.repos}`);

  return queryString.join('+');
};

export const fetchUserData = async (query) => {
  try {
    const searchQuery = buildQuery(query);
    const response = await API.get(`/users?q=${searchQuery}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
