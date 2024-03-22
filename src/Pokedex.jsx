import React, { useState } from 'react';
import Pokemon from './Pokemon';

const Pokedex = ({ pokemonList }) => {
  const [language, setLanguage] = useState('english');

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="pokedex">
      <h2>Pokédex</h2>
      <div className="language-buttons">
        <button onClick={() => handleChangeLanguage('english')}>English</button>
        <button onClick={() => handleChangeLanguage('japanese')}>Japanese</button>
        <button onClick={() => handleChangeLanguage('chinese')}>Chinese</button>
        <button onClick={() => handleChangeLanguage('french')}>French</button>
      </div>
      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <Pokemon key={index} pokemon={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
