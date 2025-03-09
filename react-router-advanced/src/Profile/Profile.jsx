import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings';
import {React} from 'react';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <ul>
          <li><Link to="/details/124">Details</Link></li>
          <li><Link to="/settings/124">Settings</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/details/:userId" element={<ProfileDetails />} />
        <Route path="/settings/:userId" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
