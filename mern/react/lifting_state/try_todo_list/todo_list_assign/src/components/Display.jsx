import React from "react";

const Display = (props) => {
  const { formInfo, setFormInfo } = props;

  const handleChecked = (i) => {
    // console.log(i);
    const copyFormInfo = [...formInfo];
    copyFormInfo[i].isComplete = !copyFormInfo[i].isComplete;
    setFormInfo(copyFormInfo);
  };

  const deleteTask = (i) => {
    const filteredList = formInfo.filter((info, idx) => {
      return idx !== i;
    });
    console.log(filteredList);
    setFormInfo(filteredList);
  };

  return (
    <div>
      {/* {JSON.stringify(formInfo)}; */}

      {formInfo.map((value, i) => {
        return (
          <div key={i}>
            <span
              style={
                value.isComplete
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              Name: {value.name}
            </span>
            <br />
            isComplete: {value.isComplete.toString()}{" "}
            <input
              type="checkbox"
              checked={value.isComplete}
              onChange={() => handleChecked(i)}
            />
            <button onClick={() => deleteTask(i)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
