/** @format */

import { useCallback, useState, useEffect } from "react";
import "./App.css";
import { InputBar } from "./InputBar";
import { mockTodos } from "../../data/todos";
import { TodoList } from "./TodoList";
import type { Todo } from "./types";
import {
  getAllTodos,
  createNewTodos,
  updateCompleted,
  deleteTodo,
} from "./api";

function App() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);

  const addNewTodo = useCallback(async (description: string) => {
    const newTodo = await createNewTodos(description);
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const handleUpdateTodos = useCallback(
    async (id: number, completed: boolean, description: string) => {
      await updateCompleted(id, completed, description);
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed, description } : todo
        )
      );
    },
    []
  );

  const handleDeleteTodos = useCallback(async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    const loadTodos = async () => {
      const data = await getAllTodos();
      setTodos(data);
    };
    loadTodos();

    return () => {
      abortController.abort();
    };
  }, [todos]);

  return (
    <>
      <h1>My todos</h1>
      <div>
        <InputBar onAdd={addNewTodo} />
      </div>
      <div className="todo-container">
        <TodoList
          todos={todos}
          getTodos={() => todos}
          onUpdate={handleUpdateTodos}
          onDelete={handleDeleteTodos}
        />
      </div>
    </>
  );
}

export default App;
