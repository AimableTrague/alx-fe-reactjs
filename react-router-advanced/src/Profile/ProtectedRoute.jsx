import { Route, Navigate } from 'react-router-dom';
import {React} from 'react';

function ProtectedRoute({ element, ...rest }) {
  const isAuthenticated = false; // Replace with real auth check (e.g., from context or localStorage)

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
}

export default ProtectedRoute;
