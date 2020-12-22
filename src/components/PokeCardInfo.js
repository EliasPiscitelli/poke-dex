import React, { useState } from "react";
import '../index.css';

function PokeCard({ pokemon }) {
  return (
    <>
      <div className="cardInfo">
        <div className="title">
        <h3>{pokemon.name.toUpperCase()}</h3>
        <article>
          <img src={pokemon.image} alt="pokemon-image-card" />
        </article>
        <p>#0{pokemon.id}</p>
        </div>
        <div className="data">
        <h4>Height</h4>
        <p>{pokemon.height}</p>
        <h4>Weight</h4>
        <p>{pokemon.weight}</p>
        <h4>Type</h4>
        <p>{pokemon.type.toString()}</p>
        <h4>Abilities</h4>
        <p>{pokemon.abilities.toString()}</p>
        </div>
      </div>
    </>
  );
}

export default PokeCard;
