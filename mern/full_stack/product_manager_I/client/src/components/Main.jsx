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

  return (
    <div>
      <Create />

      {products.map((oneProduct) => {
        return (
          <div key={oneProduct._id}>
            <Link to={"/products/" + oneProduct._id}>
              <h3>{oneProduct.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
