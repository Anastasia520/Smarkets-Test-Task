import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./EventItem.scss";
import { fetchEvent } from "../../redux/actions/events-action";

export default function EventItem() {
  const id = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const event = useSelector((state) => state.events.currentEvent);
  const loading = useSelector((state) => state.events.loadingEvent);

  useEffect(() => {
    dispatch(fetchEvent(id));
  }, []);

  return (
    <div className="event-item">
      <div className="header" onClick={() => navigate("/")}>
        <IconButton>
          <ArrowBackIcon color="primary" size="large" />
        </IconButton>
        <h2>Back to the list</h2>
      </div>
      {loading ? (
        <CircularProgress />
      ) : (
        <Card className="card">
          <CardContent>
            <h2>{event.name}</h2>
            <h4>Start date: {event.start_date}</h4>
            <Button variant="contained" disabled={!event.bet_allowed}>
              Make a bet!
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
