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
  return { type: REMOVE_TASK, payload: taks };
}
