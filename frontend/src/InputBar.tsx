/** @format */

import { useState } from "react";

type InputBarProps = {
  onAdd: (description: string) => void;
};

export const InputBar = ({ onAdd }: InputBarProps) => {
  const [todoInput, setTodoInput] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleClick = (todoInput: string) => {
    onAdd(todoInput);
    setTodoInput("");
  };
  return (
    <div>
      <input
        placeholder="add a todo"
        value={todoInput}
        onChange={handleInput}
        onKeyDown={(e)=>e.key === 'Enter' && todoInput && handleClick(todoInput)}
      />
      <button onClick={() => todoInput && handleClick(todoInput)}>Add Todo</button>
    </div>
  );
};
