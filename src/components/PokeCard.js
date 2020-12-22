import React, { useState } from 'react';

function PokeCard({pokemon, openInfoPokemon}) {

   const showPokeInfo = () => {
      openInfoPokemon(pokemon);
   }

   return(
       <>
         <div className="card-container" style={{border: "3px solid black", display:"flex", flexFlow:"row wrap", width:"25%"}} onClick={() =>showPokeInfo()}>
            <article>
               <img src={pokemon.image} alt="pokemon-image-card"/>
            </article>
            <h3>{pokemon.name}</h3>
            <p>#0{pokemon.id}</p>
         </div>   
       </>
   )
}

export default PokeCard;
