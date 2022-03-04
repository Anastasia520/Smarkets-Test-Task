import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Card, CardContent, CircularProgress } from "@mui/material";

import "./EventList.scss";
import { fetchEvents } from "../../redux/actions/events-action";

export default function EventList() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.eventsList);
  const loading = useSelector((state) => state.events.loadingEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <>
      <h1>Top Football Events</h1>
      <div className="events-list">
        <div className="events">
          {loading ? (
            <CircularProgress />
          ) : (
            events.map((event) => {
              return (
                <Link key={event.id} to={`/event/${event.id}`}>
                  <Card className="card">
                    <CardContent>
                      <h5>{event.name}</h5>
                    </CardContent>
                  </Card>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
