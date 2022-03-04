import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducers from "./redux/reducers";

const middlewares = [thunkMiddleware, logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
