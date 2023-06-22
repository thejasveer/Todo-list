import React from "react";

function Todo({ todoItem, onDelete, index }) {
  return (
    <div>
      <hr className="mt-5" />
      <li className="flex  items-center gap-10 w-full">
        <label>{index + 1}</label>
        <span className="flex flex-col text-left items-start justify-start w-full   ">
          <p>{todoItem.title}</p>
          <p>{todoItem.description}</p>
        </span>
        <button
          className="p-1 bg-red-500 rounded-md text-white"
          onClick={() => {
            onDelete(index);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default Todo;
