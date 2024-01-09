import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};

const PokemonSearchContainer: React.FC = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const searchPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      setPokemon(response.data);
    } catch (error) {
      console.error('Error: Pokemon not found');
    }
  };

  useEffect(() => {
    if (search === '') {
      setPokemon(null);
    } else {
      searchPokemon();
    }
  }, [search]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        placeholder="Search Pokemon"
      />
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonSearchContainer;
