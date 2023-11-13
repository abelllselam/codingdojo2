import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const People = () => {
  const [ppl, setPpl] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        setPpl(res.data);
      })
      .catch((err) => {
        setPpl({ err: "These aren't the droids you're looking for" });
      });
  }, [id]);

  if (!ppl) {
    return <h1>Loading...</h1>;
  } else if (ppl.err) {
    return (
      <>
        <p>These aren't the droids you're looking for</p>
        <img
          src="https://i.kym-cdn.com/entries/icons/original/000/018/682/obi-wan.jpg"
          alt="obi-wan"
        />
      </>
    );
  } else {
    return (
      <div>
        <h2>{ppl.name}</h2>
        <h4>Height: {ppl.height}</h4>
        <h4>Mass: {ppl.mass}</h4>
        <h4>Hair Color: {ppl.hair_color}</h4>
        <h4>Skin Color: {ppl.skin_color}</h4>
      </div>
    );
  }
};

export default People;
