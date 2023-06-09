import { useRouter } from "next/router";
import { getFilteredEvents } from '../../data';
import EventListComponent from '../../components/eventcomponents/event-list-component';

const FilteredEvents = () => {
  const router = useRouter();
  console.log(router);
  const filterData = router.query.slug;

  if(!filterData) { return <p>loading. . .</p> }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return <p>invalid format, check the options</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if(!filteredEvents || filteredEvents.length === 0) {
    return <p>no events found</p>
  }

  return (
    <div>
      <EventListComponent events={filteredEvents}/>
    </div>
  )
}

export default FilteredEvents