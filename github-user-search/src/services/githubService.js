import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/search/users',
});

// Helper function to build the query string for the search
const buildQuery = (params) => {
  let queryString = [];

  // Add user if available
  if (params.user) queryString.push(params.user);

  // Add location if available
  if (params.location) queryString.push(`location:${params.location}`);

  // Add repos filter if available (e.g., repos:>10 means more than 10 repos)
  if (params.repos) queryString.push(`repos:>${params.repos}`);

  return queryString.join('+');
};

export const fetchUserData = async (query) => {
  try {
    // Build the search query string
    const searchQuery = buildQuery(query);

    // Log the query for debugging purposes
    console.log(`Searching with query: ${searchQuery}`);

    // Make the GET request to the GitHub API with the constructed query string
    const response = await API.get(`?q=${searchQuery}`);

    // Log the response for debugging purposes
    console.log(response.data);

    // Return the response data (list of users)
    return response.data;
  } catch (error) {
    // Log any errors encountered during the request
    console.error('Error fetching data:', error);
    return null;
  }
};
