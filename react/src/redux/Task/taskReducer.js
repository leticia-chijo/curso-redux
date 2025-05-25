import { ADD_TASK, REMOVE_TASK } from "./taskTypes";

const initalStateTasks = [];

function tasksReducer(state = initalStateTasks, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter((t) => t !== action.payload);
    default:
      return state;
  }
}

export default tasksReducer;
