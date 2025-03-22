import React from 'react';
import { useParams } from 'react-router-dom';
import JsonData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = JsonData.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return <h2 className="text-center text-2xl font-semibold mt-10">Recipe not found</h2>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md" />
        <h3 className="text-2xl font-semibold mt-4">{recipe.title}</h3>
        <p className="text-gray-600 text-md mt-2">{recipe.summary}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
