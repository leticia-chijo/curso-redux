import { createSelector } from "@reduxjs/toolkit";

const selectPokemons = (state) => state.pokemons.list;
const selectSearch = (state) => state.pokemons.searchInput;

export const selectPokemonsWithC = createSelector([selectPokemons], (pokemons) => {
  return pokemons.filter((poke) => poke.name.charAt(0) === "c");
});

export const selectPokemonSearch = createSelector([selectPokemons, selectSearch], (pokemons, searchInput) => {
  return pokemons.filter((poke) => poke.name.includes(searchInput));
});
