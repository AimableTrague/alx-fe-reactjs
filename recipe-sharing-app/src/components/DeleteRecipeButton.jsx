import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();  // ✅ Import and use `useNavigate`

    const deleteClick = (event) => {
        event.preventDefault();
        deleteRecipe(recipeId);
        navigate('/recipeslist');  // ✅ Redirect user after deletion
    };

    return <button onClick={deleteClick}>Delete</button>;
};

export default DeleteRecipeButton;
