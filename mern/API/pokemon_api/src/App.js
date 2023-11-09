import "./App.css";
import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807&offset=0`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        const pokeList = res.results;
        setPokemon(pokeList);
        console.log(pokeList.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <p>Pokemon</p>
      <button onClick={fetchPokemon}>fetch pokemon</button>
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
