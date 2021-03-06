import React, { useState, useEffect } from "react";
/*Style*/
import "../index.css";
import search from '../assets/img/search.png';
import arrowRight from '../assets/img/arrowRight.png';
import arrowLeft from '../assets/img/arrowLeft.png';
// Components
import PokeCard from "./PokeCard";
import Modal from "./Modal";
import PokeCardInfo from "./PokeCardInfo";
import Loading from './Loading';
// Service
import pokemonService from "../services/pokemonService";

function Home() {
  const [pokeName, setPokeName] = useState("");
  const [pokeSelected, setPokeSelected] = useState("");
  const [pokeList, setPokeList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [maxIdPoke, setMaxIdPoke] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async (newMaxIdPoke = 1) => {
    setLoading(true);
    await pokemonService.getAllPokemons(newMaxIdPoke).then((res) => {
      if (res.status) {
        setPokeList(res.data);
      } else {
        alert("Fallo");
      }
    });
    setLoading(false);
  };

  const searchPokemon = async () => {
    setLoading(true);
    await pokemonService.getPokemon(pokeName.toLowerCase()).then((res) => {
      if (res.status) {
        setPokeSelected(res.data);
        debugger
        setShowModal(true);
      } else {
        alert("No se consiguio Pokemon");
        setPokeSelected("");
      }
    });
    setLoading(false);
  };

  const handleModalShow = (pokemon) => {
    if (pokemon) {
      setPokeSelected(pokemon);
    }
    setShowModal(!showModal);
  };

  const handleInput = (event) => {
    setPokeName(event.target.value);
  };

  const getMorePokemons = async type => {
    let newSearchId = maxIdPoke;
    if(type === 'after'){
      newSearchId += 20;
      setMaxIdPoke(Number(maxIdPoke) + 20);
    } else {
      newSearchId -= 20;
      setMaxIdPoke(Number(maxIdPoke) - 20);
    }
    getAllPokemons(newSearchId);
  }

  return (
    <>
    {loading ? <Loading/> : 
      <div id="home">
      <section>
        <input
          placeholder="¿Qué Pokemon Buscas?"
          type="text"
          onChange={handleInput}
        />
        <button onClick={searchPokemon}><img src={search}/></button>
      </section>
      <section id="pokeList">
      {pokeList.length > 0 &&
        pokeList.map((pokemon, i) => {
          return (
            <PokeCard key={i} pokemon={pokemon} openInfoPokemon={handleModalShow} />
          );
        })}
        </section>
        <div id="buttonPage">
        {maxIdPoke > 1 && 
        <button className="buttonArrow" onClick={() => getMorePokemons('before')}><img src={arrowLeft}/></button>
        }
        <button className="buttonArrow" onClick={() => getMorePokemons('after')}><img src={arrowRight}/></button>
        </div>
      <Modal show={showModal} onClose={handleModalShow} title={"Pokemon"}>
        <PokeCardInfo pokemon={pokeSelected} />
      </Modal>
      
    </div>
    }
    </>
  );
}

export default Home;
