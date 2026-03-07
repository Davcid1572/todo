import React from "react";
import { listProps } from "@/interface";

const List: React.FC<listProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => (
        <li key={todo.id} className="mb-4">
          <label>
            <input
              className="mr-2"
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />
            {todo.title}
          </label>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="border ml-2 border-red-600 text-red-600 p-2 font-bold rounded-md hover:text-white hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
