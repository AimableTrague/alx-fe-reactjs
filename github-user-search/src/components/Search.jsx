import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ setUserData }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        setError('User not found.');
        setUserData(null);
      } else {
        setUserData(data);
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
    </div>
  );
};

export default Search;
