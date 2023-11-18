import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("cool");
    const tempObjectToSendToDB = {
      title,
      price,
      description,
    };

    axios
      .patch("http://localhost:8000/api/products/" + id, tempObjectToSendToDB)
      .then((res) => {
        console.log("✅✅✅✅✅", res.data);
        navigate("/");
      })
      .catch((err) => console.log("❌❌❌❌", err));
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={submitHandler}>
        <div>
          title:
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
        <button>Edit</button>
      </form>
    </div>
  );
};

export default Update;
