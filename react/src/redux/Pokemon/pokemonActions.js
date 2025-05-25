import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS, SELECT_POKEMON } from "./pokemonTypes";
import axios from "axios";

export function fetchRequest() {
  return { type: FETCH_REQUEST };
}

export function fetchSuccess(pokemons) {
  return { type: FETCH_SUCCESS, payload: pokemons };
}

export function fetchError(error) {
  return { type: FETCH_ERROR, payload: error };
}

export function selectPokemon(pokemon) {
  return { type: SELECT_POKEMON, payload: pokemon };
}

// Async action
const POKEMON_AMOUNT = 10;
const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_AMOUNT}`;

export function fetchPokemons() {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get(API_URL)
      .then((res) => dispatch(fetchSuccess(res.data.results)))
      .catch((err) => dispatch(fetchError(err.response.data)));
  };
}
