import { ADD_TASK, REMOVE_TASK } from "./taskTypes";

export function addTask(task) {
  return { type: ADD_TASK, payload: task };
}

export function removeTask(task) {
  return { type: REMOVE_TASK, payload: task };
}
