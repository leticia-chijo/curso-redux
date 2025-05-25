const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const axios = require("axios");
const thunk = require("redux-thunk").thunk;

const POKEMON_AMOUNT = 5;
const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_AMOUNT}`;

// State
const initialState = {
  pokemons: [],
  loading: false,
  error: "",
};

// Action Types
const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

// Action Creators
function fetchRequest() {
  return { type: FETCH_REQUEST };
}

function fetchSuccess(pokemons) {
  return { type: FETCH_SUCCESS, payload: pokemons };
}

function fetchError(error) {
  return { type: FETCH_ERROR, payload: error };
}

// Thunk Action Creator (Async Action)
function fetchPokemons() {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get(API_URL)
      .then((res) => dispatch(fetchSuccess(res.data.results)))
      .catch((err) => dispatch(fetchError(err.response.data)));
  };
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true, error: "" };
    case FETCH_SUCCESS:
      return { ...state, loading: false, pokemons: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Store
const store = redux.createStore(reducer, redux.applyMiddleware(logger));
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {});

// Dispatch das actions
store.dispatch(fetchPokemons())

unsubscribe();
