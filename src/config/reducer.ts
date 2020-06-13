import { combineReducers } from "redux";
import HomeReducer from "../modules/Home/reducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    home: HomeReducer,
  });

  return rootReducer;
}
