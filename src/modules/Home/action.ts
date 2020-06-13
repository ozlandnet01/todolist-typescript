/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_ALL_TASK,
  CHANGE_TASK_STATUS,
  GET_ALL_TASK_FAIL,
  GET_ALL_TASK_SUCCESS,
  INSERT_NEW_TASK,
  INSERT_NEW_TASK_SUCCESS,
  INSERT_NEW_TASK_FAIL,
  TYPING_SEARCH,
} from "./types";

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function getAllTask() {
  return {
    type: GET_ALL_TASK,
  };
}

export function changeTaskStatus(id: number) {
  return {
    type: CHANGE_TASK_STATUS,
    data: id,
  };
}
export const getAllTaskSuccess = (value: object) => ({
  type: GET_ALL_TASK_SUCCESS,
  data: value,
});
export const getAllTaskFail = (value: object) => ({
  type: GET_ALL_TASK_FAIL,
  data: value,
});

export const insertNewTask = (value: object) => ({
  type: INSERT_NEW_TASK,
  data: value,
});

export const insertNewTaskSuccess = (value: object) => ({
  type: INSERT_NEW_TASK_SUCCESS,
  data: value,
});

export const insertNewTaskFail = (value: object) => ({
  type: INSERT_NEW_TASK_FAIL,
  data: value,
});

export const searchTodoByKeyword = (value: string) => ({
  type: TYPING_SEARCH,
  data: value,
});

// export function getAllTask(username) {
//     return {
//       type: GETALLTASK,
//       username,
//     };
//   }
