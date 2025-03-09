export function useAuth() {
    // Simulate user authentication
    const user = localStorage.getItem("user"); // Check if user is stored
    return { isAuthenticated: !!user }; // Convert to boolean
  }
  