import React, { useState } from 'react'
import JsonData from '../data.json'

const HomePage = () => {

    const [ recipes, setRecipes ] = useState([])

    useState(() => {
        setRecipes(JsonData)
    }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
