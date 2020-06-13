import { createStore, applyMiddleware, compose } from "redux";
import createReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import reduxSaga from "./saga";

//const composeEnhancers = composeWithDevTools();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  createReducer(),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(reduxSaga);

export default store;
