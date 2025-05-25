const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// State ------------------------------------------------------
const initialStateTitle = "";
const initialStateTasks = [];

// Action types ----------------------------------------------
const ADD_TITLE = "ADD_TITLE";
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

// Action Creators => Funções que criam a ação
function addTitle(title) {
  return { type: ADD_TITLE, payload: title }; // Actions: objeto => type e payload
}

function addTask(task) {
  return { type: ADD_TASK, payload: task };
}

function removeTask(task) {
  return { type: REMOVE_TASK, payload: task };
}

// Reducers -------------------------------------------------
// Receber estado atual e a action e retorna como deve ser o novo estado
// Reducer NÃO ALTERA o estado diretamente, o estado é imutável
const reducerTitle = (state = initialStateTitle, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return action.payload;
    default:
      return state;
  }
};

const reducerTasks = (state = initialStateTasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter((t) => t !== action.payload);
    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  title: reducerTitle,
  tasks: reducerTasks,
});

// Store ------------------------------------------------------
const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));

console.log("Inital state", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(addTitle("Lista de Tarefas do dia 25/05"));
store.dispatch(addTask("Cozinhar Almoço"));
store.dispatch(addTask("Estudar Redux"));
store.dispatch(addTask("Costurar botões na camisa"));
store.dispatch(removeTask("Estudar Redux"));

unsubscribe();
