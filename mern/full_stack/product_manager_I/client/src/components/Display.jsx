import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Display = (props) => {
  const { id } = useParams();
  const [thisProducts, setThisProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => {
        console.log(res.data);
        setThisProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {thisProducts ? (
        <>
          <h2>Title: {thisProducts.title}</h2>
          <p>Price: {thisProducts.price}</p>
          <p>Description: {thisProducts.description}</p>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Display;
