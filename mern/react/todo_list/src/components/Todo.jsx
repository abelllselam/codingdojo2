import React from "react";
import { useState } from "react";

const Todo = (props) => {
  const { idx, task, setTask } = props;

  let currentTask = task[idx];
  let taskCompleted = task[idx].isComplete;

  let notDone = {
    textDecoration: "line-through",
  };

  let done = {
    textDecoration: "none",
  };

  const checkVal = (e) => {
    task[idx].isComplete = !task[idx].isComplete;
    setTask([...task]);
  };

  const deleteValue = (e) => {
    e.preventDefault();
    let list = task.filter((singleTask) => task.indexOf(singleTask) !== idx);
    setTask(list);
  };
  return (
    <div>
      <form onSubmit={deleteValue}>
        <input type="checkbox" checked={taskCompleted} onChange={checkVal} />
        <p style={taskCompleted ? notDone : done}>{currentTask.name}</p>
        <input type="submit" value="Delete" />
      </form>
    </div>
  );
};

export default Todo;
