import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  const { id, name, type, base, image } = pokemon;
  const displayName = name[language];

  return (
    <div className="pokemon">
      <img src={image} alt={displayName} className="pokemon-image" />
      <div className="pokemon-info">
        <div className="pokemon-id">[{id}] {displayName}</div>
        <div className="pokemon-types">{type.join(' ')}</div>
        <div className="pokemon-base"></div>
        <div className="pokemon-stats">
          {Object.entries(base).map(([stat, value]) => (
            <div key={stat} className="pokemon-stat">{stat}: {value}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
