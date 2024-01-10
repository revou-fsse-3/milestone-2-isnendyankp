import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Text, Button } from '../../components';

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  types: string[]; // Add types attribute
  abilities: string[]; // Add abilities attribute
};

const PokemonListContainer: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=4');

        const pokeData: Pokemon[] = await Promise.all(
          response.data.results.map(async (poke: { name: string }) => {
            const pokemonResponse = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${poke.name}`
            );
            const abilities = pokemonResponse.data.abilities.map(
              (ability: { ability: { name: string } }) => ability.ability.name
            );
            const types = pokemonResponse.data.types.map(
              (type: { type: { name: string } }) => type.type.name
            );

            return {
              id: pokemonResponse.data.id,
              name: poke.name,
              sprite: pokemonResponse.data.sprites.front_default,
              types,
              abilities,
            };
          })
        );

        setPokemon(pokeData);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-4xl mb-5">
        <Text>Pokemon List</Text>
      </h1>

      {/* Button navigate to pokemonsearch */}
      <Button
        label="Pokemon Search"
        onClick={() => navigate('/pokemonSearch')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />

      {/* Pokemon List */}
      {pokemon.map((poke) => (
        <div
          key={poke.id}
          className="flex items-center justify-between bg-blue-200 border-blue-500 border-solid border-2 p-2 mb-2 rounded-md"
        >
          <div>
            <p className="text-lg font-semibold">{poke.name}</p>
            <p>ID: {poke.id}</p>
            <p>Types: {poke.types.join(', ')}</p>
            <p>Abilities: {poke.abilities.join(', ')}</p>
          </div>
          <img src={poke.sprite} alt={poke.name} />
        </div>
      ))}
    </div>
  );
};

export default PokemonListContainer;
