import React, { useState } from "react";
import { formProps } from "@/interface";

const Form: React.FC<formProps> = ({ submitItem }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    submitItem(newItem);
    setNewItem("");
  }

  return (
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
  );
};

export default Form;
