import Link from "next/link";
import React from "react";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { title, date, location, image, id } = props.event;
  const readable = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formateAddress = location?.replace(",", "\n");
  const exploreLink = `events/${id}`;
  console.log(image);
  return (
    <li className={classes.item}>
      <img src={image} alt="image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readable}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formateAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Go to the Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
