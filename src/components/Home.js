import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
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
    await pokemonService.getPokemon(pokeName).then((res) => {
      if (res.status) {
        setPokeSelected(res.data);
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
      <div>
      <section>
        <input
          placeholder="¿Qué Pokemon Buscas?"
          type="text"
          onChange={handleInput}
        />
        <button onClick={searchPokemon}>Buscar</button>
      </section>
      {pokeList.length > 0 &&
        pokeList.map((pokemon) => {
          return (
            <PokeCard pokemon={pokemon} openInfoPokemon={handleModalShow} />
          );
        })}
        {maxIdPoke > 1 && 
        <button onClick={() => getMorePokemons('before')}>Anterior</button>
        }
        <button onClick={() => getMorePokemons('after')}>Siguiente</button>
      <Modal show={showModal} onClose={handleModalShow} title={"Pokemon"}>
        <PokeCardInfo pokemon={pokeSelected} />
      </Modal>
    </div>
    }
    </>
  );
}

export default Home;
