import { ADD_TITLE } from "./titleTypes";

export function addTitle(title) {
  return { type: ADD_TITLE, payload: title };
}
