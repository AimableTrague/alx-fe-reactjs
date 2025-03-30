import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    if (query.trim() === '') {
      setError('Please enter a search term.');
      return;
    }

    setLoading(true);

    try {
      const data = await fetchUserData(query);
      
      if (!data) {
        setError("Looks like we cant find the user");
        setResults(null);
      } else {
        setResults(data);
        setError(null);
      }
    } catch (err) {
      setError('Failed to fetch user data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="border-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="rounded border-2 bg-slate-400 p-1">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {results && (
        <div>
          <h2>{results.name}</h2>
          <p>Username: {results.login}</p>
          <img src={results.avatar_url} alt="User Avatar" width="100" />
          <p>Followers: {results.followers}</p>
          <a href={results.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
