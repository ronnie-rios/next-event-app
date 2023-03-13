import EventListComponent from "../components/eventcomponents/event-list-component"
import { getFeaturedEvents } from "../data"

export default function Home() {
  const events = getFeaturedEvents();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-bold m-10">Featured Events</h1>
      <EventListComponent events={events}/>
    </div>
  )
}
