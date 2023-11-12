import React, { useState } from "react";

const Form = (props) => {
  const { formInfo, setFormInfo } = props;
  const [newName, setNewName] = useState("");
  const [newIsComplete, setNewIsComplete] = useState(false);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNewstatus = (e) => {
    setNewIsComplete(e.target.checked);
  };

  const addForm = (e) => {
    e.preventDefault();

    const newValues = {
      name: newName,
      isComplete: newIsComplete,
    };

    setFormInfo([...formInfo, newValues]);

    setNewName("");
    setNewIsComplete(false);
  };

  return (
    <div>
      {JSON.stringify(props.formInfo)};
      <form onSubmit={addForm}>
        <p>
          <span>
            <input type="text" value={newName} onChange={handleNameChange} />
          </span>
          <span>
            <input
              type="checkbox"
              value={newIsComplete}
              onChange={handleNewstatus}
            />
          </span>
          <span>
            <button>Add</button>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;
