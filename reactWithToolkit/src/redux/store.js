import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";
import pokemonReducer from "./pokemonSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    pokemons: pokemonReducer,
  },
  devTools: {
    name: "TodoList",
  },
});

export default store;
