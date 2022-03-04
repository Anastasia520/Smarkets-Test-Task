import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import EventList from "./components/EventList/EventList";
import EventItem from "./components/EventItem/EventItem";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<EventList />} />
          <Route path="/event/:id" element={<EventItem />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
