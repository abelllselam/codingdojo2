import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Display = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const deleteMe = (deleteID) => {
    // console.log(deleteID);
    axios
      .delete("http://localhost:8000/api/products/" + deleteID)
      .then((res) => {
        console.log("It was deleted successfully", res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {thisProducts ? (
        <>
          <h2>Title: {thisProducts.title}</h2>
          <p>Price: {thisProducts.price}</p>
          <p>Description: {thisProducts.description}</p>
          <button onClick={() => deleteMe(thisProducts._id)}>Delete</button>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Display;
