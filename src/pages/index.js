import EventList from "@/components/event/EventList";
import EventSearch from "@/components/event/EventSearch";
import { getFeaturedEvents } from "@/dummy-data";
import React from "react";

const Home = () => {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventSearch />
      <EventList key={events} events={events} />
    </div>
  );
};

export default Home;
