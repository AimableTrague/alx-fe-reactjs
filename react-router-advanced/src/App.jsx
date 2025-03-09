import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Profile from './Profile/Profile';
import ProfileDetails from './Profile/ProfileDetails';
import ProfileSettings from './Profile/ProfileSettings';
import Home from './Profile/Home';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/details/123">Profile Details</Link>
          </li>
          <li>
            <Link to="/settings/123">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:userId" element={<ProfileDetails />} />
        <Route path="/settings/:userId" element={<ProfileSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
