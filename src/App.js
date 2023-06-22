import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";
import Error404 from "./MyComponents/Error404";
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  const [data, setData] = useState("");

  const [todosList, setTodo] = useState([
    {
      sno: 1,
      title: "Go to the mal",
      description: "jewdwe dkewndknewd wedkewkd ewdw",
    },
    {
      sno: 2,
      title: "Go to the malqwdqwewd wdwedwq",
      description: "jewdwe dkewndknewd wedkewkd ewdw",
    },
    {
      sno: 3,
      title: "Go to the malqwddqwd",
      description: "jewdwe dkewnddewewd qewdqwedqw dknewd wedkewkd ewdw",
    },
  ]);

  const onDelete = (index) => {
    setTodo(
      todosList.filter((t, i) => {
        return i !== index;
      })
    );
  };
  const add = (title, description) => {
    let newTodo = {
      sno: todosList.length + 1,
      title: title,
      description: description,
    };
    setTodo([...todosList, newTodo]);
  };
  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo onAdd={add} />
                <Todos todos={todosList} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/home" element={<Navigate replace={true} to="/" />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
