import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Create from "./Create";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => `This is an error inside the axios get all ----> ${err}`);
  }, []);

  const deleteMe = (deleteID) => {
    // console.log(deleteID);
    axios
      .delete("http://localhost:8000/api/products/" + deleteID)
      .then((res) => {
        console.log(res.data);
        const filteredProducts = products.filter((eachProduct) => {
          return eachProduct._id !== deleteID;
        });
        setProducts(filteredProducts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Create />

      {products.map((oneProduct) => {
        return (
          <div key={oneProduct._id}>
            <Link to={"/products/" + oneProduct._id}>
              <h3>{oneProduct.title}</h3>
            </Link>
            <Link to={`/products/${oneProduct._id}/edit`}>Edit</Link>
            <button onClick={() => deleteMe(oneProduct._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
