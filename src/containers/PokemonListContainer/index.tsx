import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Pokemon = {
  name: string;
};

const PokemonListContainer: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=5'
      );
      setPokemon(response.data.results);
    };
    fetchPokemon();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-4xl mb-5">Pokemon List:</h1>
      {pokemon.map((poke) => (
        <div
          key={poke.name}
          className="flex items-center justify-between bg-blue-200 border-blue-500 border-solid border-2 p-2 mb-2 rounded-md"
        >
          <p className="text-lg font-semibold">{poke.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonListContainer;
