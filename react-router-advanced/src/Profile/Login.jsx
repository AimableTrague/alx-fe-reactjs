import {React} from "react";

function Login() {
    const handleLogin = () => {
      // Set authentication flag (for simplicity)
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/profile'; // Redirect to Profile after login
    };
  
    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={handleLogin}>Log In</button>
      </div>
    );
  }
  
  export default Login;
  