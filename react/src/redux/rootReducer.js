import { combineReducers } from "redux";
import titleReducer from "./Title/titleReducer";

const rootReducer = combineReducers({
  title: titleReducer,
});

export default rootReducer;
