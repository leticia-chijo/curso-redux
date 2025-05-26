import { createSelector } from "@reduxjs/toolkit";

const selectPokemons = (state) => state.pokemons.list;

export const selectPokemonsWithC = createSelector([selectPokemons], (pokemons) => {
  return pokemons.filter((poke) => poke.name.charAt(0) === "c");
});
