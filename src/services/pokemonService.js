import http from "axios";

export default class pokemonService {
  /*   static getAllPokemons2 = async () => {
    let response = {
      data: {},
      status: true,
    };
    await http
      //.get(`https://pokeapi.co/api/v2/ability`)
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => {
        response.data = res.data.results;
      })
      .catch(error => {
        response.data = error;
        response.status = false;
      });
    return response;
  }; */

  static getAllPokemons = async (idMax) => {
    let response = {
      data: {},
      status: true,
    };
    let pokemonArray = [];
    const maxPokemons = Number(idMax) + 20;
    for (let i = idMax; i < maxPokemons; i++) {
      await http
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((res) => {
          pokemonArray.push(setValuesForPokemon(res.data));
          response.data = pokemonArray;
        })
        .catch((error) => {
          response.data = error;
          response.status = false;
        });
    }
    return response;
  };

  static getPokemon = async (pokeName) => {
    let response = {
      data: {},
      status: true,
    };
    await http
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        response.data = setValuesForPokemon(res.data);
      })
      .catch((error) => {
        response.data = error;
        response.status = false;
      });
    return response;
  };
}

function setValuesForPokemon(data) {
  const infoPokemon = {
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight,
    type: getTypes(data.types),
    abilities: getAbilities(data.abilities),
    image: data.sprites.front_default,
  };
  return infoPokemon;
}

function getAbilities(abilities) {
  let abilitiesArray = [];
  for (const abilitie of abilities) {
    abilitiesArray.push(abilitie.ability.name);
  }
  return abilitiesArray;
}

function getTypes(types) {
  let typesArray = [];
  for (const type of types) {
    typesArray.push(type.type.name);
  }
  return typesArray;
}
