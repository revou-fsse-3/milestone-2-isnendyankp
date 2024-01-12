import './App.css';
import {  PokemonListContainer, PokemonSearchContainer } from './containers';
import PublicLayout from './layouts/PublicLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        { path: '/', element: <PokemonListContainer /> },
        { path: '/pokemonSearch', element: <PokemonSearchContainer /> },
      ],
    },
    { path: '*', element: <h1>404</h1> },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
