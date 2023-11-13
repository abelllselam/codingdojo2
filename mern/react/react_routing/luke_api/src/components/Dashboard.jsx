import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [choice, setChoice] = useState("people");
  const [id, setId] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${choice}/${id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Search for:</label>
          <select onChange={(e) => setChoice(e.target.value)} value={choice}>
            <option value="people">People</option>
            <option value="planet">Planet</option>
          </select>
          <label>ID:</label>
          <input
            type="number"
            name="id"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
        </div>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Dashboard;
