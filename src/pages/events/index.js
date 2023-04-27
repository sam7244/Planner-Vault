import EventList from "@/components/event/EventList";
import EventSearch from "@/components/event/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const AllEvents = () => {
  const events = getAllEvents();
  const router = useRouter();
  
  const findEventHandler = (year ,month) => {
    const fullPath = `events/${year}/${month}`
    router.push(fullPath);
  }

  return (
  <div>
    <EventSearch onSearch={findEventHandler} />
    <EventList key={events} events={events} />
  </div>
  )
};

export default AllEvents;
