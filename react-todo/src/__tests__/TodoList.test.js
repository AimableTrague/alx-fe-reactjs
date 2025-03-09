import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";
import React from "react";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders the initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a todo...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("Learn React")).toBeNull();
    });
  });
});
