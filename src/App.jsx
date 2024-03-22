import React, { useEffect, useState } from 'react';
import Pokedex from './Pokedex';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then(response => response.json())
      .then(data => setPokemonList(data));
  }, []);

  return (
    <div className="app">
      <Pokedex pokemonList={pokemonList} />
    </div>
  );
};

export default App;
