import React, { useEffect } from "react";
import axios from "axios";
function About() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log("yes");
    });
  }, []);
  return <div>About</div>;
}

export default About;
