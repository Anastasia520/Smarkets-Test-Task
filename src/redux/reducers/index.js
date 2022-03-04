import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import { eventsReducer } from "./events-reducer";

const reducers = combineReducers({
  form,
  events: eventsReducer,
});

export default reducers;
