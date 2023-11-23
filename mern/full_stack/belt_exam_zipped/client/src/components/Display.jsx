import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Display = (props) => {
  // In-line CSS for convenience
  const appHeader = {
    display: "flex",
    justifyContent: "space-around",
  };
  const makeTextBold = {
    fontWeight: "bold",
    // display: "block",
    textAlign: "left",
    marginRight: "10px",
  };
  const borderAround = {
    border: "2px black solid",
    display: "flex",
    justifyContent: "space-around",
    width: "600px",
    marginLeft: "150px",
    padding: "10px",
  };
  const spaceLeft = {
    marginLeft: "50px",
  };

  const buttonValue = {
    backgroundColor: "red",
    color: "white",
    marginBottom: "20px",
  };
  //   The css ended and the useNavigate is assigned
  //   destructuring id from useParams hook
  const { id } = useParams();

  // useNavigate will be used to go back to the home page after deleting
  const navigate = useNavigate();

  //   setting the usestate for the dynamic changes
  const [thisPet, setThisPet] = useState(null);
  const [count, setCount] = useState(0);
  const [isIncrease, setIsIncrease] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + id)
      .then((res) => {
        console.log(res.data);
        setThisPet(res.data);
      })
      .catch((err) => console.log(err));

    //   flag for the increment
    setIsIncrease(false);
  }, [id]);

  const deleteMe = (deleteID) => {
    // console.log(deleteID);
    axios
      .delete("http://localhost:8000/api/pets/" + deleteID)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const incrementOne = () => {
    if (!isIncrease) {
      setCount(count + 1);
      // flag using usestate
      setIsIncrease(true);
    }
  };

  return (
    <div>
      <div style={appHeader}>
        <h1>Pet Shelter</h1>
        <Link to="/">back to home</Link>
      </div>

      {/* {JSON.stringify(thisPet)} */}
      {thisPet ? (
        <>
          <div style={appHeader}>
            <h3 style={spaceLeft}>Details about {thisPet.name}</h3>
            <button onClick={() => deleteMe(thisPet._id)} style={buttonValue}>
              Adopt {thisPet.name}
            </button>
          </div>
          <div style={borderAround}>
            <div>
              <p>
                <span style={makeTextBold}> Pet type:</span> {thisPet.type}
              </p>
              <p>
                <span style={makeTextBold}>Description:</span>{" "}
                {thisPet.description}
              </p>
              <p>
                <span style={makeTextBold}>Skills:</span> {thisPet.skill_1}
                <br />
                {thisPet.skill_2}
                <br />
                {thisPet.skill_3}
              </p>
              <button onClick={() => incrementOne()}>
                Like {thisPet.name}
              </button>
              <p>{count > 0 && count}</p>
            </div>
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Display;
