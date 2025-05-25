import { combineReducers } from "redux";
import titleReducer from "./Title/titleReducer";
import tasksReducer from "./Task/taskReducer";

const rootReducer = combineReducers({
  title: titleReducer,
  tasks: tasksReducer,
});

export default rootReducer;
