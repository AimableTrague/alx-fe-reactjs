import { useState } from "react";
import React from "react";

function AddTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
