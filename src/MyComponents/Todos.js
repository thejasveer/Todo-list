import React from "react";
import Todo from "./Todo";
function Todos(props) {
  return (
    <div className="container h-screen">
      <h3 className="text-center text-red-500 font-sans text-3xl">
        ToDos List
      </h3>
      {props.todos.length === 0 ? (
        <h2 className="text-center">NO TODOS</h2>
      ) : (
        <ul>
          {props.todos.map((todo, i) => {
            return (
              <Todo
                index={i}
                todoItem={todo}
                onDelete={props.onDelete}
                key={todo.sno}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Todos;
