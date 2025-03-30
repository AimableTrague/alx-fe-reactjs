import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [user, setUser] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [minRepos, setMinRepos] = useState('');  // Added minRepos state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Construct query based on user input, including minRepos if provided
    const query = {
      user: user.trim() || undefined,
      location: location.trim() || undefined,
      repos: repos.trim() || undefined,
      minRepos: minRepos.trim() || undefined,  // Ensure minRepos is included
    };

    try {
      const data = await fetchUserData(query);
      if (!data || !data.items) {
        setError("No users found");
        setResults([]);
      } else {
        setResults(data.items);  // Update the results with the fetched data
        setError(null);
      }
    } catch (err) {
      setError("Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='m-5'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">User:</label>
        <input
          type="text"
          name="user"
          className="border-2 mr-5"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          className="border-2 mr-5"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="repo">Repo:</label>
        <input
          type="text"
          name="repo"
          className="border-2 mr-5"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
        />
        <label htmlFor="minRepos">Minimum Repos:</label>
        <input
          type="number"
          name="minRepos"
          className="border-2"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}  // Handle minRepos input
        />
        <button type="submit" className="rounded border-2 bg-slate-400 p-1">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {results && (
        <div>
          {results.map((result) => (
            <div key={result.id}>
              <h2>{result.login}</h2>
              <p>Location: {result.location || 'Not provided'}</p>
              <p>Followers: {result.followers}</p>
              <p>Repos: {result.public_repos}</p>
              <a href={result.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
