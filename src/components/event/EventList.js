import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css"

const EventList = (props) => {
  console.log(props.events);
  return (
    <div>
      <ul className={classes.list}>
        {props.events?.map((event) => {
          return <EventItem key={event.id} event={event} />;
        })}
      </ul>
    </div>
  );
};

export default EventList;
