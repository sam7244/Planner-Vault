import React from "react";
import Button from "../ui/Button";
import classes from "./EventSearch.module.css";
import { useRef } from "react";
import { useRouter } from "next/router";

const EventSearch = (props) => {

  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const router = useRouter();

  const eventHandler = (event) => {
    event.preventDefault();

    const year = yearInputRef.current.value;
    const month = monthInputRef.current.value;

    const fullPath = `events/${year}/${month}`
    router.push(fullPath);
  };

  return (
    <form className={classes.form} onSubmit={eventHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2020">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">febrary</option>
            <option value="3">march</option>
            <option value="4">april</option>
            <option value="5">may</option>
            <option value="6">june</option>
            <option value="7">july</option>
            <option value="8">august</option>
            <option value="9">september</option>
            <option value="10">october</option>
            <option value="11">november</option>
            <option value="12">december</option>
          </select>
        </div>
      </div>

      <Button>Check Event</Button>
    </form>
  );
};

export default EventSearch;
