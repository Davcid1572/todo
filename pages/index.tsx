import React, { useState } from "react";

const index = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<
    { id: string; title: string; completed: boolean }[]
  >([]);

  function handleSubmit(e: any) {
    e.preventDefault();
    setTodos((currTodo) => [
      ...currTodo,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);

    setNewItem("");
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currTodo) => {
      return currTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  return (
    <div className="bg-gray-800 h-screen p-8 text-white">
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className=" text-white p-4 border mb-4 shadow-lg rounded-lg"
        >
          <div className="mb-4">
            <label htmlFor="item" className="block ">
              Add New Item
            </label>
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              id="item"
              className="bg-white w-full p-2 text-black rounded-md"
            />
          </div>
          <button className="w-full border p-2 rounded-md hover:bg-gray-600">
            Add
          </button>
        </form>

        <h1 className="font-bold mb-2">TODO LIST</h1>
        <ul>
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
              <button className="border ml-2 border-red-600 text-red-600 p-2 font-bold rounded-md hover:text-white hover:bg-red-600">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
