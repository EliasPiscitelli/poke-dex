import React, { useState } from 'react';
import pokeball from '../assets/img/pokeball.png';
import Pokedex from '../assets/img/Pokedex.png'

function PokeCard({pokemon, openInfoPokemon}) {

   const showPokeInfo = () => {
      openInfoPokemon(pokemon);
   }

   return(
       <>
         <div className="card-container" onClick={() =>showPokeInfo()}>
            <div className="pokedex"><img src={Pokedex}/></div>
            <article>
               <img src={pokemon.image} alt="pokemon-image-card"/>
            </article>
            <h3>{pokemon.name.toUpperCase()}</h3>
            <p>#0{pokemon.id}</p>
            
            <div className="pokeball"><img src={pokeball} alt="pokeball"/></div>
         
         </div>   
       </>
   )
}

export default PokeCard;
