import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Update = (props) => {
  // In-line CSS for convenience
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
    marginRight: "300px",
  };
  const moveUp = {
    // marginBottom: "400px",
    marginTop: "-50px",
  };
  //   The css ended and the useNavigate is assigned
  const navigate = useNavigate();

  //   destructuring id
  const { id } = useParams();

  //   setting the usestate for the dynamic changes
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill_1, setSkill_1] = useState("");
  const [skill_2, setSkill_2] = useState("");
  const [skill_3, setSkill_3] = useState("");
  const [errors, setErrors] = useState([]);

  // getting a pet record by id in order to pre-populate
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        setSkill_1(res.data.skill_1);
        setSkill_2(res.data.skill_2);
        setSkill_3(res.data.skill_3);
      })
      .catch((err) => console.log(err));
  }, [id]);

  //   When the form is submitted this function will run
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
    // updating the record with http method patch
    axios
      .patch("http://localhost:8000/api/pets/" + id, tempObjectToSendToDB)
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
      <div>
        <div style={appHeader}>
          <h1>Pet Shelter</h1>
          <Link to="/">back to home</Link>
        </div>
        <h3 style={spaceLeft}>Edit {name}</h3>
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
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  Pet Type:
                  <input
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
                <div>
                  Pet Description:
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                {/* The button is placed here for aesthetics */}
                <button>Edit pet</button>
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
    </div>
  );
};

export default Update;
