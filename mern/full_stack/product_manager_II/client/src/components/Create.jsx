import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit test");
    const tempObjectToDB = {
      title,
      price,
      description,
    };

    axios
      .post("http://localhost:8000/api/products", tempObjectToDB)
      .then((res) => {
        console.log("☑️☑️☑️☑️", res.data);
        navigate("/");
      })
      .catch((err) => console.log("❌❌❌❌", err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          Title:
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          Description:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
