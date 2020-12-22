import React, { useState } from "react";

function PokeCard({ pokemon }) {
  return (
    <>
      <div
        className="card-container"
        style={{
          border: "3px solid black",
          display: "flex",
          flexFlow: "column nowrap",
          width: "25%",
        }}
      >
        <h3>{pokemon.name}</h3>
        <article>
          <img src={pokemon.image} alt="pokemon-image-card" />
        </article>
        <p>#0{pokemon.id}</p>
        <h6>Height</h6>
        <p>{pokemon.height}</p>
        <h6>Weight</h6>
        <p>{pokemon.weight}</p>
        <h6>Type</h6>
        <p>{pokemon.type.toString()}</p>
        <h6>Abilities</h6>
        <p>{pokemon.abilities.toString()}</p>
      </div>
    </>
  );
}

export default PokeCard;
