import { all } from "redux-saga/effects";
import { watcherGetTask } from "../modules/Home/saga";

export default function* reduxSaga() {
  yield all([...watcherGetTask]);
}
