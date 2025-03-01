import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes); // Get all recipes
  const favorites = useRecipeStore(state => state.favorites); // Get user favorites
  
  // Find recipes that are marked as favorites
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Filter out undefined if any recipe is not found

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;