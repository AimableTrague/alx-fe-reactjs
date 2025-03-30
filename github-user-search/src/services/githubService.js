import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/search/',
});

// Helper function to build the query string for the search
const buildQuery = (params) => {
  let queryString = [];

  if (params.user) queryString.push(`${params.user}`);
  if (params.location) queryString.push(`location:${params.location}`);
  if (params.repos) queryString.push(`repos:>${params.repos}`);  // Filter users with more than `repos` repos

  return queryString.join('+');
};

export const fetchUserData = async (query) => {
  try {
    // Build the search query string
    const searchQuery = buildQuery(query);

    // Log the query for debugging purposes
    console.log(`Searching with query: ${searchQuery}`);

    // Make the GET request to the GitHub API with the built query
    const response = await API.get(`/users?q=${searchQuery}`);

    // Log the response for debugging purposes
    console.log(response.data);

    // Return the response data
    return response.data;
  } catch (error) {
    // Log any errors encountered during the request
    console.error('Error fetching data:', error);
    return null;
  }
};
