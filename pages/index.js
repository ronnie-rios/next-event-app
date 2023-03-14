import EventListComponent from "../components/eventcomponents/event-list-component";
import EventSearch from "../components/eventcomponents/event-search";
import { getFeaturedEvents } from "../data";
import { useRouter } from "next/router";

export default function Home() {
  const events = getFeaturedEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl text-bold m-10">Featured Events</h1>
        <EventListComponent events={events}/>
      </div>
      <div>
        <EventSearch onSearch={findEventsHandler}/>
      </div>
    </div>
  )
}
