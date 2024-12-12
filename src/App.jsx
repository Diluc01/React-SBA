import { useState, useEffect } from "react";
import { getAllPokemon } from "./utils/poke-api";
import PokemonCard from "./PokemonCard";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonData = await getAllPokemon();
      setPokemon(pokemonData);
    };

    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      <div>
        {pokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
