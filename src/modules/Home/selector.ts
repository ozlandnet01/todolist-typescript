import { createSelector } from "reselect";
import { initialState } from "./reducer";

const getTodos = (state: any) => {
  return state.task || initialState.task;
};
const getKeyword = (state: any) => state.keyword || initialState.keyword;

const getFilteredTodos = createSelector(
  [getTodos, getKeyword],
  (todos, keyword) =>
    todos.filter((todo: any) => {
      return todo.toDo.includes(keyword);
    })
);

export default getFilteredTodos;
