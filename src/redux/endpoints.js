const API = "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3";

export const getEventsUrl = () => `${API}/popular/event_ids/sport/football/`;
export const getEventUrl = (id) => `${API}/events/${id}/`;
