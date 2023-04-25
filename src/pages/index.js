import EventList from "@/components/event/EventList";
import { getFeaturedEvents } from "@/dummy-data";
import React from "react";

const Home = () => {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventList key={events} events={events} />
    </div>
  );
};

export default Home;
