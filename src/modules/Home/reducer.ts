import {
  Action,
  CHANGE_TASK_STATUS,
  GET_ALL_TASK_SUCCESS,
  TYPING_SEARCH,
} from "./types";

export const initialState = {
  task: [],
  keyword: "",
};

const HomeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_ALL_TASK_SUCCESS:
      const task = action.data;
      return { ...state, task };
    case CHANGE_TASK_STATUS:
      const newState = changeTaskStatus(state, action.data);
      return { ...state, newState };
    case TYPING_SEARCH:
      const keyword = action.data;
      return { ...state, keyword: keyword };
    default:
      return state;
  }
};

const changeTaskStatus = (prevState: any, id: number) => {
  const newState = prevState.task.map((task: any) => {
    if (task.id === id) {
      const updatedObject = Object.assign({}, task);
      updatedObject.status = !updatedObject.status;
      return updatedObject;
    }
    return task;
  });
  prevState.task = newState;

  return prevState;
};

export default HomeReducer;
