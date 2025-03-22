import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    preparation: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'At least two ingredients are required';
    } else {
      const ingredientsArray = formData.ingredients.split(',').map(item => item.trim());
      if (ingredientsArray.length < 2) newErrors.ingredients = 'Enter at least two ingredients';
    }
    if (!formData.preparation.trim()) newErrors.preparation = 'Preparation steps are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Recipe Added:', formData);
    }
  };

  return (
    <div className="flex flex-col w-fit">
        <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="pr-4">Title</label>
            <input
                className="border-2 border-black"
                type="text"
                name="title"
                id="title"
                placeholder="Enter the title"
                onChange={handleChange}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
            <br />

            <label htmlFor="ingredients" className="pr-4">Ingredients (comma-separated)</label>
            <input
                className="border-2 border-black"
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder="Enter the ingredients"
                onChange={handleChange}
            />
            {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
            <br />

            <label htmlFor="preparation" className="pr-4">Preparation Steps</label>
            <textarea
                className="border-2 border-black"
                name="preparation"
                id="preparation"
                placeholder="Enter preparation steps"
                onChange={handleChange}
            />
            {errors.preparation && <p className="text-red-500">{errors.preparation}</p>}
            <br />

            <button
                className="bg-slate-500 border p-2"
            >
                Add
            </button>
        </form>
      
    </div>
  );
};

export default AddRecipeForm;
