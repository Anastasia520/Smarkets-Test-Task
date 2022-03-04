import {
  GET_EVENTS,
  GET_EVENTS_ERROR,
  GET_EVENTS_LOADING,
  GET_EVENT,
  GET_EVENT_ERROR,
  GET_EVENT_LOADING,
} from "../types";

const INITIAL_STATE = {
  currentEvent: [],
  errorEvent: false,
  loadingEvent: true,
  eventsList: [],
  errorEvents: false,
  loadingEvents: true,
};

export const eventsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        eventsList: action.payload,
      };
    case GET_EVENTS_ERROR:
      return {
        ...state,
        errorEvents: true,
      };
    case GET_EVENTS_LOADING:
      return {
        ...state,
        loadingEvents: false,
      };
    case GET_EVENT:
      return {
        ...state,
        currentEvent: action.payload,
      };
    case GET_EVENT_ERROR:
      return {
        ...state,
        errorEvent: action.payload,
      };
    case GET_EVENT_LOADING:
      return {
        ...state,
        loadingEvent: action.payload,
      };
    default:
      return state;
  }
};
