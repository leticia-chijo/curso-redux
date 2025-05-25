import { ADD_TITLE } from "./titleTypes";

const initialStateTitle = "";

function titleReducer(state = initialStateTitle, action) {
  switch (action.type) {
    case ADD_TITLE:
      return action.payload;
    default:
      return state;
  }
}

export default titleReducer;
