/** @format */

import type { Todo } from "./types";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  getTodos: () => Todo[];
  onUpdate: (id: number, completed: boolean, description: string) => void;
  onDelete: (id: number)=>void
};
export const TodoList = (props: TodoListProps) => {
  const { todos, onUpdate, onDelete } = props;

  return (
    <div className="todo-list-container">
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <TodoItem
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
};
