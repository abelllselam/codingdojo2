import React, { useState } from "react";

const Form = ({ task, setTask }) => {
  const [todoList, setTodoList] = useState(""); // Initialize todoList with an empty string

  const handleInput = (e) => {
    setTodoList(e.target.value);
  };

  const formData = (e) => {
    e.preventDefault();
    if (todoList.trim() !== "") {
      let todoVal = {
        name: todoList,
        isComplete: false,
      };

      setTask([...task, todoVal]);
      setTodoList("");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={formData}>
          <input
            type="text"
            onChange={handleInput}
            name="task"
            value={todoList}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default Form;
