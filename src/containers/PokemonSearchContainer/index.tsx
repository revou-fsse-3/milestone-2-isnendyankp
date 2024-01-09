import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};

const PokemonSearchContainer: React.FC = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const navigate = useNavigate();

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
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search Pokemon"
        className="p-2 rounded border border-gray-300 shadow-inner mb-4"
      />
      {pokemon && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-full"
          />
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl mb-2">{pokemon.name}</h1>
          </div>
        </div>
      )}
      <button
        onClick={() => navigate('/pokemonList')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Back to List
      </button>
    </div>
  );
};

export default PokemonSearchContainer;
