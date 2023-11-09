import React from "react";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [task, setTask] = useState([
    {
      name: "abcd",
      isComplete: true,
    },
  ]);

  return (
    <div className="App">
      <Form task={task} setTask={setTask} />

      {task.map((singleTask, i) => (
        <Todo key={i} idx={i} task={task} setTask={setTask}></Todo>
      ))}
    </div>
  );
}

export default App;
