import React from "react";

const index = () => {
  return (
    <div className="bg-gray-800 h-screen p-8 text-white">
      <div className="max-w-md mx-auto">
        <form className=" text-white p-4 border mb-4 shadow-lg rounded-lg">
          <div className="mb-4">
            <label htmlFor="Item" className="block">
              New Item
            </label>
            <input
              type="text"
              id="item"
              className="bg-white w-full p-2 rounded-md"
            />
          </div>
          <button className="w-full border p-2 rounded-md hover:bg-gray-600">
            Add
          </button>
        </form>

        <h1 className="font-bold mb-2">TODO LIST</h1>
        <ul>
          <li className="mb-4">
            <label>
              <input className="mr-2" type="checkbox" />
              Item 1
            </label>
            <button className="border ml-2 border-red-600 text-red-600 p-2 font-bold rounded-md hover:text-white hover:bg-red-600">
              Delete
            </button>
          </li>
          <li className="mb-4">
            <label>
              <input className="mr-2" type="checkbox" />
              Item 1
            </label>
            <button className="border ml-2 border-red-600 text-red-600 p-2 font-bold rounded-md hover:text-white hover:bg-red-600">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
