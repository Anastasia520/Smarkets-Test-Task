import * as axios from "axios";

import { getEventsUrl, getEventUrl } from "../endpoints";
import {
  GET_EVENTS,
  GET_EVENTS_ERROR,
  GET_EVENTS_LOADING,
  GET_EVENT,
  GET_EVENT_ERROR,
  GET_EVENT_LOADING,
} from "../types";

const getEvents = () => {
  return axios({
    url: getEventsUrl(),
    method: "GET",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  });
};

const getEvent = (id) => {
  return axios({
    url: getEventUrl(id),
    method: "GET",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  });
};

export const fetchEvents = () => async (dispatch) => {
  try {
    const eventsIds = await getEvents();
    let events = [];

    for (let i = 0; i < eventsIds.data.popular_event_ids.length; i++) {
      const eventName = await getEvent(eventsIds.data.popular_event_ids[i]);
      events.push(eventName.data.events[0].name);
    }

    const eventsData = eventsIds.data.popular_event_ids.map((id, index) => ({
      id: id,
      name: events[index],
    }));

    dispatch({
      type: GET_EVENTS,
      payload: eventsData,
    });

    dispatch({ type: GET_EVENTS_LOADING });
  } catch (error) {
    dispatch({
      type: GET_EVENTS_ERROR,
    });
  }
};

export const fetchEvent = (id) => async (dispatch) => {
  try {
    const eventDetails = await getEvent(id.id);
    dispatch({
      type: GET_EVENT,
      payload: eventDetails.data.events[0],
    });
    dispatch({ type: GET_EVENT_LOADING });
  } catch (error) {
    dispatch({
      type: GET_EVENT_ERROR,
    });
  }
};
