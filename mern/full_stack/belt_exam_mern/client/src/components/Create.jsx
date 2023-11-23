import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Create = (props) => {
  const appHeader = {
    display: "flex",
    justifyContent: "space-around",
  };
  const borderAround = {
    border: "2px black solid",
    display: "flex",
    justifyContent: "space-around",
    width: "600px",
    marginLeft: "200px",
    padding: "50px",
  };
  const spaceLeft = {
    marginRight: "410px",
  };
  const moveUp = {
    // marginBottom: "400px",
    marginTop: "-50px",
  };

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill_1, setSkill_1] = useState("");
  const [skill_2, setSkill_2] = useState("");
  const [skill_3, setSkill_3] = useState("");
  //Create an array to store errors from the API
  const [errors, setErrors] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const tempObjectToSendToDB = {
      name,
      type,
      description,
      skill_1,
      skill_2,
      skill_3,
    };
    axios
      .post("http://localhost:8000/api/pets", tempObjectToSendToDB)
      .then((res) => {
        console.log("☑️☑️☑️☑️", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("❌❌❌❌❌", err);
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  return (
    <div>
      <div style={appHeader}>
        <h1>Pet Shelter</h1>
        <Link to="/">back to home</Link>
      </div>
      <h3 style={spaceLeft}>Know a pet needing a home?</h3>
      <div>
        <form onSubmit={submitHandler}>
          {errors.map((err, index) => (
            <p style={{ color: "red" }} key={index}>
              {err}
            </p>
          ))}
          <div style={borderAround}>
            <div>
              <div>
                Pet Name:
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                Pet Type:
                <input value={type} onChange={(e) => setType(e.target.value)} />
              </div>
              <div>
                Pet Description:
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button>Add pet</button>
            </div>
            <div style={moveUp}>
              <div>
                <p>Skills (optional):</p>
                Skill 1:
                <input
                  value={skill_1}
                  onChange={(e) => setSkill_1(e.target.value)}
                />
              </div>
              <div>
                Skill 2:
                <input
                  value={skill_2}
                  onChange={(e) => setSkill_2(e.target.value)}
                />
              </div>
              <div>
                Skill 3:
                <input
                  value={skill_3}
                  onChange={(e) => setSkill_3(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
