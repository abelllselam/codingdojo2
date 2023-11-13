import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Planet = () => {
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        setPlace(res.data);
      })
      .catch((err) => {
        setPlace({ err: "These aren't the droids you're looking for" });
      });
  }, [id]);

  if (!place) {
    return <h1>Loading...</h1>;
  } else if (place.err) {
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
        <h2>{place.name}</h2>
        <h4>Climate: {place.climate}</h4>
        <h4>Terrain: {place.terrain}</h4>
        <h4>Surface Water: {place.surface_water === "1" ? "true" : "false"}</h4>
        <h4>Population: {place.population}</h4>
      </div>
    );
  }
};

export default Planet;
