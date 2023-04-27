import EventList from "@/components/event/EventList";
import ResultsTitle from "@/components/event/ResultTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading.....</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numberYear = +filteredYear;
  const numberMonth = +filteredMonth;

  console.log(numberMonth);
  console.log(numberYear);

  if (
    isNaN(numberYear) ||
    isNaN(numberMonth) ||
    numberYear > 2030 ||
    numberMonth > 12
  ) {
    return <p className="center">Wrong Data.......</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numberYear,
    month: numberMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      
        <div className="alert">
        <ErrorAlert>
          <p>can't Find the Data</p>
        </ErrorAlert>
        <div className="alert body">
          <Button link="/events">All Events</Button>
        </div>
        </div>
      
    );
  }

  const date = new Date(numberYear, numberMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEvents;
