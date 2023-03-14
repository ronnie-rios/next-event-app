import EventListComponent from "../../components/eventcomponents/event-list-component"
import { getAllEvents } from "../../data";

const EventsHome = () => {
  const events = getAllEvents();
  return (
    <div className="">
      <h1 className="text-4xl text-bold m-10"> all events</h1>
      <EventListComponent events={events}/>
    </div>
  )
}

export default EventsHome