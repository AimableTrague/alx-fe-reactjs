import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [user, setUser] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    let query = {};

    
    if (user.trim() !== '') query.user = user;
    if (location.trim() !== '') query.location = location;
    if (repos.trim() !== '' && !isNaN(repos)) query.repos = repos;

    if (Object.keys(query).length === 0) {
      setError('Please enter at least one search term.');
      return;
    }

    setLoading(true);

    try {
      const data = await fetchUserData(query);

      if (!data || data.items.length === 0) {
        setError("Looks like we can't find any users.");
        setResults(null);
      } else {
        setResults(data.items);
        setError(null);
      }
    } catch (err) {
      setError('Failed to fetch user data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5">
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
          className="border-2"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
        />
        <button type="submit" className="rounded border-2 bg-slate-400 p-1">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {results && results.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2'>
          {results.map((result) => (
            <div key={result.id} className='flex flex-row items-center'>
                <img src={result.avatar_url} alt="User Avatar" width="100" className='rounded-md mr-2 border-2 border-gray-500 h-fit'/>
                <div className='flex flex-col'>
                    <h2>{result.name}</h2>
                    <p>Username: {result.login}</p>
                    <p>Followers: {result.followers}</p>
                    <p>Location: {result.location}</p>
                    <p>Repos: {result.public_repos}</p>
                    <a href={result.html_url} target="_blank" rel="noopener noreferrer" className='border w-fit bg-gray-700 text-white p-1 rounded-md'>View Profile</a>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
