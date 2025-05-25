import { combineReducers } from "redux";
import titleReducer from "./Title/titleReducer";
import tasksReducer from "./Task/taskReducer";
import pokemonReducer from "./Pokemon/pokemonReducer";

const rootReducer = combineReducers({
  title: titleReducer,
  tasks: tasksReducer,
  pokemons: pokemonReducer,
});

export default rootReducer;
