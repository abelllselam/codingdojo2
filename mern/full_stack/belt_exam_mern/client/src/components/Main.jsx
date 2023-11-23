import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = (props) => {
  const spaceLeft = {
    marginLeft: "200px",
    border: "2px solid black",
  };

  const gray = {
    backgroundColor: "gray",
  };

  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        console.log(res.data);
        setPets(res.data);
      })
      .catch((err) => `This is an error inside the axios get all ----> ${err}`);
  }, []);

  return (
    <div>
      <table style={spaceLeft}>
        <thead>
          <tr style={gray}>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((onePet) => {
            return (
              <tr key={onePet._id}>
                <td>{onePet.name}</td>
                <td>{onePet.type}</td>
                <td>
                  <Link to={`/pets/${onePet._id}`}>details</Link> |
                  <Link to={`/pets/${onePet._id}/new`}>edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
