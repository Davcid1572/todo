import React, { useState } from "react";
import Form from "@/component/common/Form";
import List from "@/component/common/List";

const index = () => {
  const [todos, setTodos] = useState<
    { id: string; title: string; completed: boolean }[]
  >([]);

  function addTodo(title: string) {
    setTodos((currTodo) => [
      ...currTodo,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
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

  function deleteTodo(id: string) {
    setTodos((currTodo) => {
      return currTodo.filter((todo) => todo.id !== id);
    });
    console.log(todos);
  }

  return (
    <div className="bg-gray-800 h-screen p-8 text-white">
      <div className="max-w-md mx-auto">
        <Form submitItem={addTodo} />

        <h1 className="font-bold mb-2">TODO LIST</h1>
        <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default index;
