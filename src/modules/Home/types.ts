export interface Action {
  type: string;
  data: any;
}

export const GET_ALL_TASK = "GET_ALL_TASK";
export const GET_ALL_TASK_SUCCESS = "GET_ALL_TASK_SUCCESS";
export const GET_ALL_TASK_FAIL = "GET_ALL_TASK_FAILED";
export const CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS";

export const TASK_STATUS = {
  DONE: true,
  PENDING: false,
};

export const INSERT_NEW_TASK = "INSERT_NEW_TASK";
export const INSERT_NEW_TASK_SUCCESS = "INSERT_NEW_TASK_SUCCESS";
export const INSERT_NEW_TASK_FAIL = "INSERT_NEW_TASK_FAILED";

export const TYPING_SEARCH = "TYPING_SEARCH";
