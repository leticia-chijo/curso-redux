import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  list: [],
  searchInput: "",
};

const POKEMON_AMOUNT = 10;
const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_AMOUNT}`;

export const fetchPokemons = createAsyncThunk("pokemons/fetchPokemons", () => {
  return axios.get(API_URL).then((res) => res.data.results);
});

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.searchInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
      builder.addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
export const { changeText } = pokemonSlice.actions;
