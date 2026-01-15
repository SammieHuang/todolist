/** @format */
import { useState, useRef, useEffect } from "react";
import type { Todo } from "./types";

type TodoItemProps = {
  todo: Todo;
  onUpdate: (id: number, completed: boolean, description: string) => void;
  onDelete: (id: number) => void;
};

export const TodoItem = (props: TodoItemProps) => {
  const { todo, onUpdate, onDelete } = props;
  const { id, description, completed } = todo;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [draft, setDraft] = useState<string>(description);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    setIsEditing(false);
    onUpdate(id!, completed, draft);
  };

  useEffect(() => {
    if (isEditing) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      });
    }
  }, [isEditing]);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onUpdate(id!, !completed, description)}
      />

      {isEditing ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={handleSubmit}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
      ) : (
        <span
          className={`todo-description ${completed ? "todo-checked" : ""}`}
          onDoubleClick={() => {
            setIsEditing(true);
            setDraft(description);
          }}
        >
          {" "}
          {description}
        </span>
      )}
      <button className="todo-delete-btn" onClick={() => onDelete(id!)}>
        Delete
      </button>
    </div>
  );
};
