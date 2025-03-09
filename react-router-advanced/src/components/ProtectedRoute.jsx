import { Navigate } from "react-router-dom";
import { useAuth } from "./auth"; // Import the authentication hook

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/" replace />;
}

export default ProtectedRoute;
