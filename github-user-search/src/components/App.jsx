import { useState } from 'react'
import Search from './Search'



function App() {

  const [userData, setUserData] = useState()

  return (
    <div className='flex flex-col items-center'>
      <Search setUserData={setUserData} />
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
          <p>Followers: {userData.followers}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  )
}

export default App
