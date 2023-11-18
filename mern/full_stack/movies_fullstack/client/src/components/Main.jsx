import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/movies")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => `This is an error inside the axios get all ----> ${err}`);
  }, []);

  const deleteMe = (deleteID) => {
    // console.log(deleteID);
    axios
      .delete("http://localhost:8000/api/movies/" + deleteID)
      .then((res) => {
        console.log(res.data);
        const filteredMovies = movies.filter((eachMovie) => {
          return eachMovie._id !== deleteID;
        });
        setMovies(filteredMovies);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* {JSON.stringify(movies)} */}
      <div>
        {movies.map((oneMovie) => {
          return (
            <div key={oneMovie._id}>
              <Link to={"/movies/" + oneMovie._id}>
                <h3>{oneMovie.title}</h3>
              </Link>
              <img src={oneMovie.image} width="200px" alt="Movie Posters" />
              <p>released: {oneMovie.releaseYear}</p>
              <p>Have you sean this? {oneMovie.seen ? "yes" : "no"}</p>
              <Link to={`/movies/${oneMovie._id}/update`}>
                Update this movie
              </Link>
              <button onClick={() => deleteMe(oneMovie._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
