import EventItemComponent from "./event-item-component";

const EventListComponent = (props) => {
  const { events } = props
  return (
    <ul>
      {events.map((item) => (
        <EventItemComponent 
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          location={item.location}
          date={item.date}
        />
      ))}
    </ul>
  )
}

export default EventListComponent