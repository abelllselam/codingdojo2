import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const axiosPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807&offset=0`)
      .then((res) => {
        console.log(res.data);
        const pokeList = res.data.results;
        setPokemon(pokeList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <p>Pokemon</p>
      <button onClick={axiosPokemon}>fetch pokemon</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((poke, idx) => {
            return (
              <tr key={idx}>
                <td>{poke.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
