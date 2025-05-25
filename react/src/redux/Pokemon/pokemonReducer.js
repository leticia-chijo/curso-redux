import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "./pokemonTypes";

const pokemonInitialState = {
  list: [],
  loading: false,
  error: null,
};

function pokemonReducer(state = pokemonInitialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default pokemonReducer;
