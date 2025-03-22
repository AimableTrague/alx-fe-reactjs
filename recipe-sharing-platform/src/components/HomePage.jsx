import React, { useState, useEffect } from 'react';
import JsonData from '../data.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(JsonData);
  }, []);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`}>
                <div 
                    key={recipe.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer p-4 
                            transition-all delay-200 duration-1000 ease-in-out 
                            hover:bg-gradient-to-b hover:from-blue-200 hover:to-slate-400"
                >
                    <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{recipe.summary}</p>
                </div>
            </Link>
          
        ))}
      </div>
    </div>
  );
};

export default HomePage;
