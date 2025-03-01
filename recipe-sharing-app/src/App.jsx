import { useState } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';  // Import FavoritesList component
import RecommendationsList from './components/RecommendationsList';  // Import RecommendationsList component

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        
        {/* Search and Navigation */}
        <SearchBar /> {/* ✅ Added SearchBar */}
        
        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/add">Add Recipe</Link>
        </nav>

        {/* Add Favorites and Recommendations sections outside of Routes */}
        <FavoritesList /> {/* Display user's favorite recipes */}
        <RecommendationsList /> {/* Display recommended recipes */}
        
        {/* Routing for other components */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
          <Route path="/delete/:recipeId" element={<DeleteRecipeButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
