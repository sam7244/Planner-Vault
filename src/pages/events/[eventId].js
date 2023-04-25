import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";
import { Fragment } from "react";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

const EventSection = () => {
  const id = useRouter().query.eventId;
  console.log(id);
  const event = getEventById(id);

  if (!event) {
    return <p>Page Not Found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventSection;
