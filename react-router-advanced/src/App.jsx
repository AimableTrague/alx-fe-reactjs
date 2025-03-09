import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Home from './components/Home';

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
