import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/details/123">Profile Details</Link></li>
          <li><Link to="/settings/123">Profile Settings</Link></li>
          <li><Link to="/blog/1">Blog Post 1</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/details/:userId" element={<ProtectedRoute element={<ProfileDetails />} />} />
        <Route path="/settings/:userId" element={<ProtectedRoute element={<ProfileSettings />} />} />
      </Routes>
    </Router>
  );
}

export default App;
